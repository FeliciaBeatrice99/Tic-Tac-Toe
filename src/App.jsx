import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function activePlayerHandler() {
    setActivePlayer((player) => player === "X" ? "O" : "X");
    setGameTurns();
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={activePlayerHandler} />
      </div>
    </main>
  );
}

export default App
