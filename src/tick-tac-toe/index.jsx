import { useState } from "react";
import Navigation from "../navigation";
import "./index.css";
import Board from "./board";

// eslint-disable-next-line react/prop-types
const TicTacToe = ({ size = 3 }) => {
  const [board, setBoard] = useState(
    Array.from(Array(size).fill(null), () => Array(size).fill(null))
  );

  const [player, setPlayer] = useState("X");

  const handleClick = () => {
    setPlayer(player === "X" ? "O" : "X");
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
