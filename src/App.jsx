import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleSelectSquare() {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        <Gameboard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={currentPlayer}
        />
      </div>
    </main>
  );
}

export default App;
