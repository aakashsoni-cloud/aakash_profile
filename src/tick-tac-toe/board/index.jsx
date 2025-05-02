/* eslint-disable react/prop-types */
import "./index.css";

const Board = ({ size, board, handleClick }) => {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${size}, 50px)` }}>
      {board.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="cell"
              onClick={() => handleClick(rowIndex, colIndex)}>
              {col}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Board;
