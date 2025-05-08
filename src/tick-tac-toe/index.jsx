import { useState } from "react";
import Navigation from "../navigation";
import "./index.css";
import Board from "./board";
import { checkWinner } from "../utils/ticktocktoeUtils";

// eslint-disable-next-line react/prop-types
const TicTacToe = ({ size = 3 }) => {
  const [board, setBoard] = useState(
    Array.from({ length: size }, () => Array(size).fill(null))
  );

  const [playerTurn, setPlayerTurn] = useState(false);

  const winner = checkWinner(board, size);
  console.log(winner);
  const status = winner
    ? `Winner is ${winner}`
    : playerTurn
    ? "Next player is X"
    : "Next player is  O";

  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] || winner) {
      return;
    }
    const deepCopyBoard = JSON.parse(JSON.stringify(board));
    deepCopyBoard[rowIndex][colIndex] = playerTurn ? "X" : "O";
    setBoard(deepCopyBoard);
    setPlayerTurn(!playerTurn);
  };

  const handleReset = () => {
    setBoard(() => {
      return Array.from(Array(size).fill(null), () => Array(size).fill(null));
    });
  };

  return (
    <div className="container">
      <Navigation />
      <h3>Play Tick-Tac-Toe</h3>
      <Board
        size={size}
        board={board}
        handleClick={handleClick}
        winner={winner}
      />
      <div className="actions-container">
        <div>{status}</div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default TicTacToe;
