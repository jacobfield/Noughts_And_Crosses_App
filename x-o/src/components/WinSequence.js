import { useState } from "react";

export default function WinSequence({ xScore, setXScore, oScore, setOScore }) {
  function winLogic(grid) {
    let xWins = 0;
    let oWins = 0;
    if (
      grid[0].value !== "" &&
      grid[0].value === grid[1].value &&
      grid[0].value === grid[2].value
    ) {
      console.log(`${grid[0].value} wins!`);
      if (grid[0].value === "X") {
        setXScore((prevXScore) => prevXScore + 1);
        xWins++;
      } else if (grid[0].value === "O") {
        setOScore((prevOScore) => prevOScore + 1);
        oWins++;
      }
      console.log(`Player X Wins: ${xScore}`);
      console.log(`Player O Wins: ${oScore}`);
    } else if (
      grid[3].value !== "" &&
      grid[3].value === grid[4].value &&
      grid[3].value === grid[5].value
    ) {
      console.log(`${grid[3].value} wins!`);
    } else if (
      grid[6].value !== "" &&
      grid[6].value === grid[7].value &&
      grid[6].value === grid[8].value
    ) {
      console.log(`${grid[6].value} wins!`);
    } else if (
      grid[0].value !== "" &&
      grid[0].value === grid[3].value &&
      grid[0].value === grid[6].value
    ) {
      console.log(`${grid[0].value} wins!`);
    } else if (
      grid[1].value !== "" &&
      grid[1].value === grid[4].value &&
      grid[1].value === grid[7].value
    ) {
      console.log(`${grid[1].value} wins!`);
    } else if (
      grid[2].value !== "" &&
      grid[2].value === grid[5].value &&
      grid[2].value === grid[8].value
    ) {
      console.log(`${grid[2].value} wins!`);
    } else if (
      grid[0].value !== "" &&
      grid[0].value === grid[4].value &&
      grid[0].value === grid[8].value
    ) {
      console.log(`${grid[0].value} wins!`);
    } else if (
      grid[6].value !== "" &&
      grid[6].value === grid[4].value &&
      grid[6].value === grid[2].value
    ) {
      console.log(`${grid[6].value} wins!`);
    }
  }

  return (
    <>
      <p>{xScore}</p>
      <p>{oScore}</p>
    </>
  );
}
// upon a winLogic condition running, render WinSequence
