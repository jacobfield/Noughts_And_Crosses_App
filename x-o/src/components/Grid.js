import { useState } from "react";
import { initialOXGrid } from "../App.js";
import winLogic from "../winLogic.js";
// each grid cell is an invisible button and displays <p>{initialOXGrid.value</p>
// Upon button click, set value to either X / O, dictated by a function

// create function to check for a win
// export function winLogic(grid) {
//   if (
//     grid[0].value !== "" &&
//     grid[0].value === grid[1].value &&
//     grid[0].value === grid[2].value
//   ) {
//     console.log(`${grid[0].value} wins!`);
//   } else if (
//     grid[3].value !== "" &&
//     grid[3].value === grid[4].value &&
//     grid[3].value === grid[5].value
//   ) {
//     console.log(`${grid[3].value} wins!`);
//   } else if (
//     grid[6].value !== "" &&
//     grid[6].value === grid[7].value &&
//     grid[6].value === grid[8].value
//   ) {
//     console.log(`${grid[6].value} wins!`);
//   } else if (
//     grid[0].value !== "" &&
//     grid[0].value === grid[3].value &&
//     grid[0].value === grid[6].value
//   ) {
//     console.log(`${grid[0].value} wins!`);
//   } else if (
//     grid[1].value !== "" &&
//     grid[1].value === grid[4].value &&
//     grid[1].value === grid[7].value
//   ) {
//     console.log(`${grid[1].value} wins!`);
//   } else if (
//     grid[2].value !== "" &&
//     grid[2].value === grid[5].value &&
//     grid[2].value === grid[8].value
//   ) {
//     console.log(`${grid[2].value} wins!`);
//   } else if (
//     grid[0].value !== "" &&
//     grid[0].value === grid[4].value &&
//     grid[0].value === grid[8].value
//   ) {
//     console.log(`${grid[0].value} wins!`);
//   } else if (
//     grid[6].value !== "" &&
//     grid[6].value === grid[4].value &&
//     grid[6].value === grid[2].value
//   ) {
//     console.log(`${grid[6].value} wins!`);
//   }
// }

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
