import { useEffect, useState } from "react";
import Navigation from "../navigation";
import "./index.css";
import Board from "./board";
import checkWinner from "../utils/checkWinner";

// eslint-disable-next-line react/prop-types
const TicTacToe = ({ size = 3 }) => {
  const [board, setBoard] = useState(
    Array.from(Array(size).fill(null), () => Array(size).fill(null))
  );

  const [winner, setWinner] = useState(false);
  const [player, setPlayer] = useState("X");

  console.log(winner);
  useEffect(() => {
    const isWinner = checkWinner(board, size);
    setWinner(isWinner);
  }, [board]);

  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex]) {
      return;
    }
    setPlayer(player === "X" ? "O" : "X");
    console.log("I have clicked the cell", rowIndex, colIndex);
    let deepCopyOfBoard = JSON.parse(JSON.stringify(board));
    deepCopyOfBoard[rowIndex][colIndex] = player;
    setBoard(deepCopyOfBoard);
  };

  const handleReset = () => {
    setBoard(Array.from(Array(size).fill(null), () => Array(size).fill(null)));
  };

  return (
    <div className="container">
      <Navigation />
      <h3>Play Tick-Tac-Toe</h3>
      <Board size={size} board={board} handleClick={handleClick} />
      <div className="actions-container">
        <div>{`Player turn:  ${player}`}</div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default TicTacToe;
