let boardGame = [
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
const tieElement = document.querySelector(".tie");
let gameReallyEnd = false;
const resetGame = document.querySelector(".reset");

function playAction(row, col, grids) {
  //Validation state before action

  //adding validation
  if (gameReallyEnd === true) {
    alert("Game Over");
    return;
  }
  /*check if cell is empty prevent moves in occupied cells*/
  let cell = boardGame[row][col];

  if (cell !== "") {
    alert("OCCUPIED");
    return; //exits so no player can play
  }
  grids.innerHTML = currentPlayer;
  grids.style.fontSize = "90px";
  // update table
  boardGame[row][col] = currentPlayer;
  winningCondition(); //check winning condition after updating the boardGame
  const isTie = drawCondition();
  if (isTie === true) {
    alert("Tie");
    clear();
    return;
  }

  if (gameEnd === true && currentPlayer === "X") {
    scorePlayer1 += 1;
    trackScores1.innerHTML = scorePlayer1;
    if (scorePlayer1 > 2) {
      gameReallyEnd = true;

      alert("Player 1 Win");
      return;
    }
  }
  if (gameEnd === true && currentPlayer === "O") {
    scorePlayer2 += 1;
    trackScores2.innerHTML = scorePlayer2;
    if (scorePlayer2 > 2) {
      gameReallyEnd = true;

      alert("Player 2 Win");
      return;
    }
  }

  //Player Turns
  if (gameEnd === true) {
    clear();
  } else {
    if (currentPlayer === "X") {
      currentPlayer = "O"; //switching player for next move
    } else {
      currentPlayer = "X";
    }
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

    playAction(row, col, grids);
    console.log(gameEnd);
    if (gameReallyEnd) {
      const gameStatus = document.querySelector("#game-status");
      gameStatus.innerHTML = "Game Over";

      clear();
      //prevents player from accessing box after game is over
      //gameStatus.style.fontSize = "90px";
    }
  });
});
resetGame.addEventListener("click", function (event) {
  event.preventDefault();
  trackScores1.innerHTML = "Player 1";
  trackScores2.innerHTML = "Player 2";
  reset();
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
    gameEnd = true;
  }
}

function drawCondition() {
  let tableIsFull = true;
  for (let i = 0; i < boardGame.length; i++) {
    const row = boardGame[i];
    for (let j = 0; j < row.length; j++) {
      //accessing cell
      const cell = boardGame[i][j];
      if (cell === "") {
        tableIsFull = false;
      }
    }
  }
  if (tableIsFull === true && gameEnd === false) {
    return true;
  }
  return false;
}

function clear() {
  boardGame = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  // currentPlayer = "X";
  gameEnd = false;
  gridBoxes.forEach(function (grids) {
    grids.innerHTML = "";
    // grids.style.fontSize = "90px";
  });
}
function reset() {
  clear();
  const gameStatus = document.querySelector("#game-status");
  gameStatus.innerHTML = "";
  gameReallyEnd = false;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
}
