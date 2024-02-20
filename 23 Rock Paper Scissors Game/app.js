// Select all buttons on the page
var buttons = document.querySelectorAll("button");
// console.log(buttons);
var resultEl = document.getElementById("result");
var playerScoreEl = document.getElementById("user-score");
var computerPlayerScore = document.getElementById("computer-score");
// Initialize player and computer scores
var playerScore = 0;
var computerScore = 0;
// Add click event listeners to each button
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});
function computerPlay() {
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It is tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(computerSelection);
        playerScore++;
        playerScoreEl.textContent = playerScore.toString();
        return "You win! ".concat(playerSelection, " beats ").concat(computerSelection);
    }
    else {
        computerScore++;
        computerPlayerScore.textContent = computerScore.toString();
        return "You lose! ".concat(computerSelection, " beats ").concat(playerSelection);
    }
}
