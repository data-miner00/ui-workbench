module Main exposing (Model, Msg, main)

import Browser
import Debug exposing (toString)
import Html exposing (Html, button, div, span, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Http
import Json.Decode
import Set exposing (Set)



---- Model ----


type alias Model =
    { guesses : Set String
    , gameState : GameState
    }


type GameState
    = Loading
    | Running String
    | Won
    | Lost
    | Error String


init : () -> ( Model, Cmd Msg )
init _ =
    ( { guesses = Set.empty
      , gameState = Loading
      }
    , fetchWord
    )


fetchWord : Cmd Msg
fetchWord =
    Http.get
        { url = "https://snapdragon-fox.glitch.me/word"
        , expect = Http.expectJson NewPhrase wordDecoder
        }


wordDecoder : Json.Decode.Decoder String
wordDecoder =
    Json.Decode.field "word" Json.Decode.string



---- Update ----


type Msg
    = Guess String
    | Restart
    | NewPhrase (Result Http.Error String)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Guess letter ->
            ( { model | guesses = Set.insert letter model.guesses }, Cmd.none )

        Restart ->
            ( { model | guesses = Set.empty, gameState = Loading }, fetchWord )

        NewPhrase (Ok phrase) ->
            ( { model | gameState = Running phrase }, Cmd.none )

        NewPhrase (Err error) ->
            ( { model | gameState = Error <| toString error }, Cmd.none )



---- View ----


view : Model -> Html Msg
view model =
    let
        phraseHtml =
            case model.gameState of
                Loading ->
                    span [ class "p-1" ] [ text "Loading" ]

                Running phrase ->
                    phrase
                        |> String.split ""
                        |> List.map
                            (\letter ->
                                if letter == " " then
                                    " "

                                else if Set.member letter model.guesses then
                                    letter

                                else
                                    "_"
                            )
                        |> List.map
                            (\entry ->
                                span [ class "p-1" ] [ text entry ]
                            )
                        |> div []

                Won ->
                    span [ class "p-1" ] [ text "Congrats!" ]

                Lost ->
                    span [ class "p-1" ] [ text "Ooops" ]

                Error error ->
                    span [ class "p-1" ] [ text error ]

        failuresHtml =
            case model.gameState of
                Running phrase ->
                    model.guesses
                        |> Set.toList
                        |> List.filter
                            (\letter ->
                                not <| String.contains letter phrase
                            )
                        |> List.map
                            (\letter ->
                                span [ class "p-1" ] [ text letter ]
                            )
                        |> div []

                _ ->
                    text ""

        buttonHtml =
            "abcdefghijklmnopqrstuvwxyz"
                |> String.split ""
                |> List.map
                    (\letter ->
                        button
                            [ onClick <| Guess letter
                            , class "py-2 px-5 m-1 rounded bg-sky-400"
                            ]
                            [ text letter ]
                    )
                |> div []
    in
    div [ class "text-[40px] text-center text-slate-800 w-3/5 mx-auto" ]
        [ phraseHtml
        , buttonHtml
        , failuresHtml
        , div []
            [ button [ onClick Restart ] [ text "Restart" ]
            ]
        ]


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = init
        , update = update
        , subscriptions = always Sub.none
        }
