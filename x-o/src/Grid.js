import { useState } from "react";
import { initialOXGrid } from "./App.js";

export function Grid() {
  // initialOXGrid.value = blank
  // each grid cell is an invisible button and displays <p>{initialOXGrid.value</p>
  // Upon button click, set value to either X / O, dictated by a function
  const [grid, setGrid] = useState(initialOXGrid);
  //   console.log(initialOXGrid);
  // grid.value = what will be updated with setGrid

  return (
    <div className="gameGrid">
      {grid.map((gridData) => {
        return (
          <GridItem
            key={gridData.id}
            id={gridData.id}
            value={gridData.value}
          ></GridItem>
        );
      })}
    </div>
  );
}

function GridItem({ id, value }) {
  console.log(id);
  return <button className="grid-item">{value}</button>;
}

// function to set inputXOrO
// let playerMove = "X"
// When called, sets state of value to playerMove
// if playerMove === "X" ? playerMove = "O" : playerMove = "X"

// on grid-item button, have onClick={inputXOrO}
