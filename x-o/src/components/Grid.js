import { useState } from "react";
import { initialOXGrid } from "../App.js";
import winLogic from "../winLogic.js";

export function Grid() {
  const [grid, setGrid] = useState(initialOXGrid);
  const [playerMove, setPlayerMove] = useState("X");
  const [win, setWin] = useState(0);
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
      // console.log(updatedGrid[5].value);
      setGrid(updatedGrid);
      winLogic(grid);
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

// init win state, pass down to winlogic as props
// upon win, update win state in winLogic
// useEffect hook listening for change in win state
// when useEffect runs, render WinSequence comp
