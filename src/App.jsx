import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";

export const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];

function derviveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [currentPlayer, setCurrentPlayer] = useState("X");

  const activePlayer = derviveActivePlayer(gameTurns);

  for (const combination of WINNING_COMBINATIONS) {
    const isWinningCombination = combination.every((position) => {
      const { row, column } = position;
      return gameTurns.some((turn) => {
        return (
          turn.sqare.row === row &&
          turn.sqare.col === column &&
          turn.player === activePlayer
        );
      });
    });

    if (isWinningCombination) {
      alert(`Player ${activePlayer} wins!`);
      window.location.reload();
    }
  }

  function handleSelectSquare(rowIndex, collumnIndex) {
    // setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {
      const currentPlayer = derviveActivePlayer(prevTurns);

      const updatedTurns = [
        { sqare: { row: rowIndex, col: collumnIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} gameTurns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
