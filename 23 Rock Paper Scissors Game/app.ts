// Select all buttons on the page
const buttons = document.querySelectorAll<HTMLButtonElement>("button");
// console.log(buttons);
const resultEl = document.getElementById("result") as HTMLDivElement;


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
    return "It is a!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
