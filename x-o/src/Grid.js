import { useState } from "react";
import { initialOXGrid } from "./App.js";
// each grid cell is an invisible button and displays <p>{initialOXGrid.value</p>
// Upon button click, set value to either X / O, dictated by a function

export function Grid() {
  const [grid, setGrid] = useState(initialOXGrid);
  const [playerMove, setPlayerMove] = useState("X");

  function inputXOrO(gridData) {
    // Clone the grid array to avoid directly mutating state
    const updatedGrid = [...grid];
    // Find the clicked grid item by its ID
    const clickedGridItem = updatedGrid.find((item) => item.id === gridData.id);
    // Check if the grid item is empty before updating its value
    if (clickedGridItem.value === "") {
      clickedGridItem.value = playerMove;
      // Toggle playerMove from X to O or O to X
      setPlayerMove((prevPlayerMove) => (prevPlayerMove === "X" ? "O" : "X"));
      // Update the state with the modified grid
      setGrid(updatedGrid);
    }
  }
  return (
    <div className="mediaGrid">
      <div className="gameGrid">
        {grid.map((gridData) => {
          return (
            <GridItem
              key={gridData.id}
              id={gridData.id}
              value={gridData.value}
              playerInput={() => inputXOrO(gridData)}
            ></GridItem>
          );
        })}
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
