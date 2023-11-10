import { useState } from "react";
import { initialOXGrid } from "./App.js";

export function Grid() {
  // initialOXGrid.value = blank
  // each grid cell is an invisible button and displays <p>{initialOXGrid.value</p>
  // Upon button click, set value to either X / O, dictated by a function
  const [grid, setGrid] = useState(initialOXGrid);
  const [playerMove, setPlayerMove] = useState("X");

  //   console.log(initialOXGrid);
  // grid.value = what will be updated with setGrid

  // function to set inputXOrO
  // let playerMove = "X"
  // When called, sets state of value to playerMove
  // if playerMove === "X" ? playerMove = "O" : playerMove = "X"
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

  // on grid-item button, have onClick={inputXOrO}

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
  console.log(id);
  return (
    <button className="grid-item" onClick={playerInput}>
      {value}
    </button>
  );
}
