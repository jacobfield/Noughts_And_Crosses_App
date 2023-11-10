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
  function inputXOrO(gridData, playerMove) {
    // set state of playerMove - gridData.value = playerMove
    gridData.value = playerMove;
    // change value o playerMove from X to O or O to X
    playerMove === "X" ? setPlayerMove("O") : setPlayerMove("X");
  }

  // on grid-item button, have onClick={inputXOrO}

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
