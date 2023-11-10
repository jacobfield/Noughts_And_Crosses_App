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
      <button className="grid-item">1</button>
      <button className="grid-item">2</button>
      <button className="grid-item">3</button>
      <button className="grid-item">4</button>
      <button className="grid-item">5</button>
      <button className="grid-item">6</button>
      <button className="grid-item">7</button>
      <button className="grid-item">8</button>
      <button className="grid-item">9</button>
      <p>{grid.value}</p>
    </div>
  );
}
