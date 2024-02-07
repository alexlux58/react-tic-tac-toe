import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={player1} setPlayer={setPlayer1} symbol="X" />
          <Player name={player2} setPlayer={setPlayer2} symbol="O" />
        </ol>
        PLAYERS GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
