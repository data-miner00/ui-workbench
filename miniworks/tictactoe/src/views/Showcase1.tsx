import { useState, useEffect } from "react";

function usePlayerScores() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  function incrementPlayer1Score() {
    setPlayer1Score((score) => ++score);
  }

  function incrementPlayer2Score() {
    setPlayer2Score((score) => ++score);
  }

  function resetScores() {
    setPlayer1Score(0);
    setPlayer2Score(0);
  }

  return {
    player1Score,
    player2Score,
    incrementPlayer1Score,
    incrementPlayer2Score,
    resetScores,
  };
}

const winningConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const stringifiedWinningConditions = winningConditions
  .map((cond) => cond.map((condTile) => condTile - 1))
  .map((cond) => JSON.stringify(cond));

function Showcase1() {
  const [turns, setTurns] = useState(false);
  const [board, setBoard] = useState([...new Array(9)]);
  const [winner, setWinner] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const {
    player1Score,
    player2Score,
    incrementPlayer1Score,
    incrementPlayer2Score,
  } = usePlayerScores();

  function onTileClick(clickedIndex: number) {
    setBoard((prevBoard) =>
      prevBoard.map((tile, index) => {
        if (!isGameOver && index === clickedIndex && !tile) {
          setTurns((turns) => !turns);
          return turns ? "o" : "x";
        } else {
          return tile;
        }
      })
    );
  }

  function restart() {
    setTurns(false);
    setBoard([...new Array(9)]);
    setWinner("");
    setIsGameOver(false);
  }

  useEffect(() => {
    const player1 = board
      .map((tile, index) => [tile, index])
      .filter((pair) => pair[0] === "o")
      .map((pair) => pair[1]);
    const player2 = board
      .map((tile, index) => [tile, index])
      .filter((pair) => pair[0] === "x")
      .map((pair) => pair[1]);

    setWinner((oldWinner) => {
      if (stringifiedWinningConditions.includes(JSON.stringify(player1))) {
        incrementPlayer1Score();
        setIsGameOver(true);
        return "o";
      } else if (
        stringifiedWinningConditions.includes(JSON.stringify(player2))
      ) {
        incrementPlayer2Score();
        setIsGameOver(true);
        return "x";
      } else {
        return oldWinner;
      }
    });

    if (9 - player1.length - player2.length == 0) {
      setIsGameOver(true);
    }
  }, [board]);

  // Player 1: o : true
  // Player 2: x : false
  return (
    <div className="h-screen bg-sky-100 p-10">
      <h1 className="text-center text-4xl font-semibold my-12 font-serif italic">
        Tic Tac Toe
      </h1>

      <Score player1Score={player1Score} player2Score={player2Score} />
      <div className="flex items-center justify-center w-[310px] flex-wrap gap-1 mx-auto mb-6">
        {board.map((box, index) => (
          <div
            key={index}
            onClick={() => onTileClick(index)}
            className={`flex justify-center items-center h-[80px] w-[80px] border-solid border border-sky-300 text-white text-xl font-bold ${
              box ? (box === "o" ? "bg-pink-500" : "bg-sky-500") : ""
            }`}
          >
            <div>{box}</div>
          </div>
        ))}
      </div>
      <div className="w-fit mx-auto">Winner is: {winner}</div>
      {isGameOver && (
        <button
          onClick={restart}
          className="mx-auto block bg-violet-500 border border-white border-solid rounded py-1 px-2 text-lg font-bold text-white"
        >
          Restart
        </button>
      )}
    </div>
  );
}

type ScoreProps = {
  player1Score: number;
  player2Score: number;
};

function Score({ player1Score, player2Score }: ScoreProps) {
  return (
    <div className="text-white flex mx-auto w-fit mb-10">
      <div className="w-[90px] h-[40px] bg-pink-500 flex items-center justify-center">
        <div>{player1Score}</div>
      </div>
      <div className="bg-white text-slate-900 w-[90px] h-[40px] flex items-center justify-center">
        <div>VS</div>
      </div>
      <div className="w-[90px] h-[40px] bg-sky-500 flex items-center justify-center">
        <div>{player2Score}</div>
      </div>
    </div>
  );
}

export default Showcase1;
