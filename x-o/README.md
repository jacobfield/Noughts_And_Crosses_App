State Management:

The useState hook is used to manage two pieces of state:
grid: Represents the current state of the game grid.
playerMove: Tracks whose turn it is (either "X" or "O").
Game Logic Function inputXOrO:

This function is responsible for handling player moves.
It first clones the current grid to avoid directly mutating the state.
It then identifies the clicked grid item and checks if it's empty.
If the grid item is empty, it updates its value with the current playerMove.
After updating the grid, it toggles playerMove to switch to the next player's turn.
Finally, it updates the state with the modified grid.
Rendering:

The Grid component renders a grid of buttons, where each button represents a cell in the game grid.
Each button (represented by GridItem) has an onClick event handler that calls the inputXOrO function with the corresponding grid data.
GridItem Component:

The GridItem component represents an individual cell in the game grid.
It renders a button with the value of the cell (either "X", "O", or blank).
Clicking on a cell triggers the inputXOrO function to update the grid with the appropriate move.
