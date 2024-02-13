import React from "react";

const Log = ({ gameTurns }) => {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => (
        <li key={`${turn.sqare.row}${turn.sqare.col}`}>
          {turn.player} played in row {turn.sqare.row}, column {turn.sqare.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
