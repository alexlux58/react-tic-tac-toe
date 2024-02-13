import React, { useState } from "react";

export const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Make sure to destructure the props correctly to get onSelectSquare
const Gameboard = ({ onSelectSquare, gameTurns }) => {
  let gameBoard = initialGameBoard;

  gameTurns.forEach((turn) => {
    gameBoard[turn.sqare.row][turn.sqare.col] = turn.player;
  });

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, cellIndex)}
                  disabled={cell !== null}
                >
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default Gameboard;

// for (const turn of gameTurns) {
//   const { square, player } = turn;
//   const { row, col } = square;
//   gameBoard[row][col] = player;
// }

// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// function handleCellClick(row, cell) {
//   setGameBoard((prevGameBoard) => {
//     // Check if the cell is already filled to exit without doing anything
//     if (prevGameBoard[row][cell]) return prevGameBoard;

//     // Update the game board with the new symbol
//     const updatedGameBoard = prevGameBoard.map((gameRow, rowIndex) => {
//       return rowIndex === row
//         ? gameRow.map((cellValue, cellIndex) => {
//             return cellIndex === cell ? activePlayerSymbol : cellValue;
//           })
//         : gameRow;
//     });

//     // Notify the App component to toggle the currentPlayer after placing a symbol
//     onSelectSquare();
//     return updatedGameBoard;
//   });
// }
