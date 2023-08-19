const boardGame = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let currentPlayer = "X";
let score = 0;
const gridBoxes = document.querySelectorAll(".grid-box");

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
    currentPlayer = "O"; //switching player for next move
  } else {
    currentPlayer = "X";
  }

  //Validation state after action
  /* need to reflect new state to UI
   */

  //drawCondition();

  // update UI
}

gridBoxes.forEach(function (grids) {
  grids.addEventListener("click", function (event) {
    event.preventDefault();
    grids.innerHTML = currentPlayer;
    grids.style.fontSize = "90px";
    const row = grids.dataset.row;
    const col = grids.dataset.col;
    playAction(row, col);
    winningCondition(currentPlayer);
  });
});
function winningCondition() {
  if (
    (boardGame[0][0] === currentPlayer &&
      boardGame[1][1] === currentPlayer &&
      boardGame[2][2] === currentPlayer) ||
    (boardGame[0][2] === currentPlayer &&
      boardGame[1][1] === currentPlayer &&
      boardGame[2][0] === currentPlayer)
  ) {
     alert ("WIN");
  } else {
    
    alert("LOST"); //Diagonal Winning
  }
  if (
    (boardGame[0][0] === currentPlayer &&
      boardGame[1][0] === currentPlayer &&
      boardGame[2][0] === currentPlayer) ||
    (boardGame[0][1] === currentPlayer &&
      boardGame[1][1] === currentPlayer &&
      boardGame[2][1] === currentPlayer) ||
    (boardGame[0][2] === currentPlayer &&
      boardGame[1][2] === currentPlayer &&
      boardGame[2][2] === currentPlayer)
  ) {
    return "WIN";
  } else {
    
    alert("LOST"); //Vertical Winning
  }
  if (
    (boardGame[0][0] === currentPlayer &&
      boardGame[0][1] === currentPlayer &&
      boardGame[0][2] === currentPlayer) ||
    (boardGame[1][0] === currentPlayer &&
      boardGame[1][1] === currentPlayer &&
      boardGame[1][2] === currentPlayer) ||
    (boardGame[2][0] === currentPlayer &&
      boardGame[2][1] === currentPlayer &&
      boardGame[2][2] === currentPlayer)
  ) {
    return "WIN";
  } else {
    
    alert("LOST"); //Horizontal Winning
  }
}
// function trackScore() {}
// function drawCondition() {}
// function reset() {}
