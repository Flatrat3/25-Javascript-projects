// Getting HTML Elements
const input = document.getElementById("input");
const message = document.querySelector(".message");
const guessButton = document.querySelector(".guess-btn");
const playAgainButton = document.querySelector("reset-btn")
const chance = document.querySelector(".left-chance span");
let pElement = chance.parentElement;
let congratsAudio = new Audio("./clap.wav");
let failAuido = new Audio("./Fail Sound Effects.mp3")

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)

let leftChance = 3;


input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    guess();
  }
});

function guess() {
  let inputValue = Number(input.value);
  leftChance--;
  chance.textContent = `${leftChance} `;

  if (inputValue == " ") {
    guessButton.setAttribute("disabled")
  }

  else if (inputValue === randomNumber) {
    message.textContent = `Congratulation You Win! The Number was ${randomNumber}`;
    congratsAudio.play()
    guessButton.remove();
    pElement.remove()
  }
  else if (inputValue > randomNumber && inputValue < 100) {
    message.textContent = "Your Guess is High👍.";
    input.value = ""
    input.focus()
  }
  else if (inputValue < randomNumber && inputValue > 0) {
    message.textContent = "Your Guess is low👎.";
    input.value = ""
    input.focus()
  } else if (leftChance == 0) {
    message.textContent = "You Lose the Game, Try Again Next Time";
    failAuido.play()
    pElement.textContent = `Correct number was  ${randomNumber}`;
    guessButton.remove();

  }
  else {
    message.textContent = "Please write a valid number";
  }
}