// Define the choices
const choices = ["rock", "paper", "scissors"];

// Generate the computer's choice
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Play one round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Get the player's choice when they click a button
function getPlayerSelection(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  const resultsDiv = document.querySelector("#results");
  const roundResult = document.createElement("p");
  roundResult.textContent = result;
  resultsDiv.appendChild(roundResult);

  const computerChoice = document.createElement("p");
  computerChoice.textContent = `Computer chose ${computerSelection}.`;
  resultsDiv.appendChild(computerChoice);
  updateScore(result);
}

// Update the score based on the round result
function updateScore(result) {
  const playerScoreSpan = document.querySelector("#player-score");
  const computerScoreSpan = document.querySelector("#computer-score");
  let playerScore = parseInt(playerScoreSpan.textContent);
  let computerScore = parseInt(computerScoreSpan.textContent);

  if (result === "You win!") {
    playerScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  checkWinner(playerScore, computerScore);
}

// Check if there's a winner after five rounds
function checkWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    alert("You win the game!");
    resetGame();
  } else if (computerScore === 5) {
    alert("You lose the game!");
    resetGame();
  }
}

// Reset the game after it's over
function resetGame() {
  const resultsDiv = document.querySelector("#results");
  const playerScoreSpan = document.querySelector("#player-score");
  const computerScoreSpan = document.querySelector("#computer-score");
  resultsDiv.textContent = "";
  playerScoreSpan.textContent = "0";
  computerScoreSpan.textContent = "0";
}

// Add event listeners to the buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", getPlayerSelection);
});
