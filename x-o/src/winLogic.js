export default function winLogic(grid, setXScore, setOScore) {
  function scoreUpdate(index) {
    if (grid[index].value === "X") {
      setXScore((prevXScore) => prevXScore + 1);
      console.log("X wins");
    } else if (grid[index].value === "O") {
      setOScore((prevOScore) => prevOScore + 1);
    }
  }

  if (
    grid[0].value !== "" &&
    grid[0].value === grid[1].value &&
    grid[0].value === grid[2].value
  ) {
    scoreUpdate(0);
    console.log(`${grid[0].value} wins!`);
  } else if (
    grid[3].value !== "" &&
    grid[3].value === grid[4].value &&
    grid[3].value === grid[5].value
  ) {
    scoreUpdate(3);
    console.log(`${grid[3].value} wins!`);
  } else if (
    grid[6].value !== "" &&
    grid[6].value === grid[7].value &&
    grid[6].value === grid[8].value
  ) {
    scoreUpdate(6);
    console.log(`${grid[6].value} wins!`);
  } else if (
    grid[0].value !== "" &&
    grid[0].value === grid[3].value &&
    grid[0].value === grid[6].value
  ) {
    scoreUpdate(0);
    console.log(`${grid[0].value} wins!`);
  } else if (
    grid[1].value !== "" &&
    grid[1].value === grid[4].value &&
    grid[1].value === grid[7].value
  ) {
    scoreUpdate(1);
    console.log(`${grid[1].value} wins!`);
  } else if (
    grid[2].value !== "" &&
    grid[2].value === grid[5].value &&
    grid[2].value === grid[8].value
  ) {
    scoreUpdate(2);
    console.log(`${grid[2].value} wins!`);
  } else if (
    grid[0].value !== "" &&
    grid[0].value === grid[4].value &&
    grid[0].value === grid[8].value
  ) {
    scoreUpdate(0);
    console.log(`${grid[0].value} wins!`);
  } else if (
    grid[6].value !== "" &&
    grid[6].value === grid[4].value &&
    grid[6].value === grid[2].value
  ) {
    scoreUpdate(6);
    console.log(`${grid[6].value} wins!`);
  }
  //   console.log(`Player X Wins: ${xWins}`);
  //   console.log(`Player O Wins: ${oWins}`);
}
