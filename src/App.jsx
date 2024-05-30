import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function activePlayerHandler(rowIndex, colIndex) {
    setActivePlayer((player) => player === "X" ? "O" : "X");
    setGameTurns((prevTurns) =>{
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      const updatedTurns = [{ square: {row: rowIndex, col: colIndex, player: activePlayer}}, ...currentPlayer];

    return updatedTurns;

    });

  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={activePlayerHandler} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App
