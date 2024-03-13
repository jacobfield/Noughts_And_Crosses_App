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
  function resetValues() {
    setGrid([
      { id: 1, locationName: "top-left", value: "" },
      { id: 2, locationName: "top-centre", value: "" },
      { id: 3, locationName: "top-right", value: "" },
      { id: 4, locationName: "middle-left", value: "" },
      { id: 5, locationName: "middle-centre", value: "" },
      { id: 6, locationName: "middle-right", value: "" },
      { id: 7, locationName: "bottom-left", value: "" },
      { id: 8, locationName: "bottom-centre", value: "" },
      { id: 9, locationName: "bottom-right", value: "" },
    ]);
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
        <button onClick={resetValues}> test</button>
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
