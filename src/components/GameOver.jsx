import React from "react";

const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>Winner: {winner}</p>
    </div>
  );
};

export default GameOver;
