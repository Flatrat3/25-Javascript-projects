// Select all buttons on the page
const buttons = document.querySelectorAll<HTMLButtonElement>("button");
// console.log(buttons);
const resultEl = document.getElementById("result") as HTMLDivElement;
const playerScoreEl = document.getElementById("user-score") as HTMLSpanElement;
const computerPlayerScore = document.getElementById(
  "computer-score"
) as HTMLSpanElement;

// Initialize player and computer scores
let playerScore: number = 0;
let computerScore = 0;

// Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

function computerPlay(): string {
  const choices: string[] = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection: string, computerSelection: string): string {
  if (playerSelection === computerSelection) {
    return "It is tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(computerSelection);
    playerScore++;
    playerScoreEl.textContent = playerScore.toString();
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    computerPlayerScore.textContent = computerScore.toString();
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
