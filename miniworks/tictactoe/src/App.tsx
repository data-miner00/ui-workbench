import { useState, useEffect } from "react";
import "./App.css";

function useTicTacToe() {}

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

function App() {
  const [turns, setTurns] = useState(false);
  const [board, setBoard] = useState([...new Array(9)]);
  const [winner, setWinner] = useState("");

  function onTileClick(clickedIndex: number) {
    setBoard((prevBoard) =>
      prevBoard.map((tile, index) => {
        if (index === clickedIndex && !tile) {
          setTurns((turns) => !turns);
          return turns ? "o" : "x";
        } else {
          return tile;
        }
      })
    );
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
        return "o";
      } else if (
        stringifiedWinningConditions.includes(JSON.stringify(player2))
      ) {
        return "x";
      } else {
        return oldWinner;
      }
    });
    console.log(player1);
    console.log(player2);
  }, [board]);

  // Player 1: o : true
  // Player 2: x : false
  return (
    <div className="h-screen bg-orange-100">
      <h1 className="text-center text-5xl font-semibold">Tic Tac Toe</h1>
      <div className="border border-solid border-pink-300 flex items-center justify-center w-[310px] flex-wrap">
        {board.map((box, index) => (
          <div
            key={index}
            onClick={() => onTileClick(index)}
            className="h-[100px] w-[100px] border-solid border border-blue-300"
          >
            {box}
          </div>
        ))}
      </div>
      <div>Player {turns ? "o" : "x"} turn</div>
      <p>Winner is: {winner}</p>
    </div>
  );
}

export default App;
