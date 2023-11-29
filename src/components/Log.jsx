import React from "react";

const Log = ({ gameTurns }) => {
  return (
    <ol id='log'>
      {gameTurns.map((turn) => (
        <li key={`${turn.player}${turn.square.row}${turn.square.col}`}>
          {/* <li> */}
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
