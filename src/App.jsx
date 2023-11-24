import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSwitchPlayer(player) {
    setActivePlayer(player);
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            isActive={activePlayer === "X"}
            initialName='Player 1'
            symbol='X'
          />
          <Player
            isActive={activePlayer === "O"}
            initialName='Player 2'
            symbol='O'
          />
        </ol>
        <GameBoard
          activePlayer={activePlayer}
          handleSwitchPlayer={handleSwitchPlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
