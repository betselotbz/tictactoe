const boardGame = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let currentPlayer = "X";
let scorePlayer1 = 0;
let scorePlayer2 = 0;
const gridBoxes = document.querySelectorAll(".grid-box");
let gameEnd = false;
const trackScores1 = document.querySelector(".player1");
const trackScores2 = document.querySelector(".player2");

function playAction(row, col) {
  //Validation state before action
  /*check if cell is empty prevent moves in occupied cells*/

  let cell = boardGame[row][col];
  if (cell !== "") {
    alert("OCCUPIED");
  }

  // update table
  boardGame[row][col] = currentPlayer;
  winningCondition(); //check winning condition after updating the boardGame
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
    const row = grids.dataset.row;
    const col = grids.dataset.col;
    grids.innerHTML = currentPlayer;
    grids.style.fontSize = "90px";
    playAction(row, col);
    console.log(gameEnd);
    if (gameEnd) {
      const gameStatus = document.querySelector("#game-status");
      gameStatus.innerHTML = "Game Over";
      //gameStatus.style.fontSize = "90px";
      if (gameEnd === true) {
        currentPlayer = ""; //after game over set currentPlayer empty
      }
    }
  });
});
trackScores1.addEventListener("click", function () {
  if (gameEnd === true) {
    scorePlayer1 += 1;
  }
});
trackScores1.addEventListener("click", function () {
  // if (gameEnd === true) {
  //   scorePlayer2 += 1;
  //   trackScores1.textContent = p1Score;
  // }
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
    // score = score + 1;
    gameEnd = true;
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
    // score = score + 1;
    gameEnd = true;
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
    // score = score + 1;
    gameEnd = true;
  }
}

// function trackScore() {

// }
// function drawCondition() {}
// function reset() {}
