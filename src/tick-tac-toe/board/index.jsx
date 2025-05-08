/* eslint-disable react/prop-types */
import "./index.css";

const Board = ({ size, board, handleClick, winner }) => {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${size}, 50px)` }}>
      {board.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="cell"
              style={{
                borderColor: `${winner ? "green" : ""}`,
              }}
              onClick={() => handleClick(rowIndex, colIndex)}>
              {cell}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Board;
