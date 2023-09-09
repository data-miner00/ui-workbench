// TicTacToe with variable board size
// https://www.youtube.com/watch?v=vweARwTPmg4

import { useState } from "react";

function generateBoard(size: number) {
  const newBoard = [];
  for (let i = 0; i < size; i++) {
    newBoard.push([...Array(size)]);
  }
  return newBoard;
}

function checkHorizontal(board: any[][]) {
  for (let row of board) {
    const rowSet = new Set(row);
    if (rowSet.size == 1 && !rowSet.has(undefined)) {
      return true;
    }
  }
  return false;
}

function rowsToColumns(board: any[][]) {
  const newBoard = [];
  let column = 0;

  while (column < board.length) {
    const newRow = [];
    for (let row = 0; row < board.length; row++) {
      newRow.push(board[row][column]);
    }
    newBoard.push(newRow);
    column++;
  }

  return newBoard;
}

function diagonalToRow(board: any[][]) {
  const newBoard: any[][] = [[], []];
  let increment = 0;
  let decrement = board.length - 1;

  while (increment < board.length) {
    newBoard[0].push(board[increment][increment]);
    newBoard[1].push(board[increment][decrement]);
    increment++;
    decrement--;
  }

  return newBoard;
}

function checkForWin(board: any[][]) {
  // horizontal
  if (checkHorizontal(board)) {
    return true;
  }
  // vertical
  if (checkHorizontal(rowsToColumns(board))) {
    return true;
  }

  // diagonal
  if (checkHorizontal(diagonalToRow(board))) {
    return true;
  }

  return false;
}

function Showcase2() {
  const [board, setBoard] = useState(generateBoard(3));
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [winner, setWinner] = useState("");

  function handleClick(row: number, col: number) {
    board[row][col] = currentPlayer;
    setBoard([...board]);
    if (checkForWin(board)) {
      setWinner(currentPlayer);
    }
    setCurrentPlayer((prevPlayer) => (prevPlayer === "x" ? "o" : "x"));
  }

  return (
    <div className="h-screen text-white bg-slate-900 flex flex-col items-center justify-center">
      <div className="">
        {board.map((row, r) => (
          <div key={r} className="flex">
            {row.map((cell, c) => (
              <div
                key={c}
                onClick={() => handleClick(r, c)}
                className="border border-solid border-white w-[50px] h-[50px] flex items-center justify-center"
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {winner && <div>Winner is {winner}</div>}
    </div>
  );
}

export default Showcase2;
