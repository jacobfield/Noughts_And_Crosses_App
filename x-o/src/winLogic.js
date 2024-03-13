export default function winLogic(grid) {
  let xWins = 0;
  let oWins = 0;
  if (
    grid[0].value !== "" &&
    grid[0].value === grid[1].value &&
    grid[0].value === grid[2].value
  ) {
    console.log(`${grid[0].value} wins!`);
    if (grid[0].value === "X") {
      xWins++;
    } else if (grid[0].value === "O") {
      oWins++;
    }
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
  console.log(`Player X Wins: ${xWins}`);
  console.log(`Player O Wins: ${oWins}`);
}
