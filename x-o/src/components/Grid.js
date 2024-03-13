// Grid.js
import { useState, useEffect } from "react";
import { initialOXGrid } from "../App.js";
import winLogic from "../winLogic.js";
import WinSequence from "./WinSequence.js";

export function Grid() {
  const [grid, setGrid] = useState(initialOXGrid);
  const [playerMove, setPlayerMove] = useState("X");
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  useEffect(() => {
    winLogic(grid, setXScore, setOScore);
  }, [grid]);

  function inputXOrO(gridData) {
    const updatedGrid = [...grid];
    const clickedGridItem = updatedGrid.find((item) => item.id === gridData.id);
    if (clickedGridItem.value === "") {
      clickedGridItem.value = playerMove;
      setPlayerMove((prevPlayerMove) => (prevPlayerMove === "X" ? "O" : "X"));
      setGrid(updatedGrid);
    }
  }

  return (
    <div className="mediaGrid">
      <div className="gameGrid">
        {grid.map((gridData) => (
          <GridItem
            key={gridData.id}
            id={gridData.id}
            value={gridData.value}
            playerInput={() => inputXOrO(gridData)}
          />
        ))}
        <p>Player X Wins: {xScore}</p>
        <p>Player O Wins: {oScore}</p>
      </div>
    </div>
  );
}

function GridItem({ id, value, playerInput }) {
  return (
    <button className="grid-item" onClick={playerInput}>
      {value}
    </button>
  );
}
