const boardGame = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let currentPlayer = "X";

function playAction(row, col) {
  //Validation state before action
  /*check if cell is empty 
    prevent moves in occupied cells*/
  let cell = boardGame[row][col];
  if (cell !== "") {
    alert("OCCUPIED");
    return;
  }

  // update table
  boardGame[row][col] = currentPlayer;
  //Player Turns
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  //Validation state after action
  /* need to reflect new state to UI
   */
  winningCondition();
  drawCondition();

  // update UI
}
function winningCondition() {}

function drawCondition() {}
function reset() {}

playAction(1, 1);
