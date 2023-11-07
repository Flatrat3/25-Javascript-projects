// Getting HTML Elements

const input = document.getElementById("input");
const message = document.querySelector(".message");
const guessButton = document.querySelector(".guess-btn");
const chance = document.querySelector(".left-chance span");
let pElement = chance.parentElement;
let leftChance = 10;
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

input.addEventListener("keyup", (e) => {
  // console.log(e)

  if (e.key == "Enter") {
    guess();
  }
});

function guess() {
  let inputValue = Number(input.value);
  // console.log(inputValue)

  if (inputValue == "") {
    alert("Please add a number");
  } else {
    leftChance--;
    chance.textContent = `${leftChance} `;
    if (leftChance <= 10 && leftChance > 0) {
      if (inputValue > randomNumber) {
        message.textContent = "Your Guess is High👍.";
      } else if (inputValue < randomNumber) {
        message.textContent = "Your Guess is low👎.";
      } else if (inputValue == randomNumber) {
        message.textContent = `Congratulation You Win! The Number was ${randomNumber}`;
        guessButton.remove();
        pElement.remove();
      } else {
        message.textContent = "Please write a valid number";
      }
    } else {
      message.textContent = "You Lose the Game, Try Again Next Time";
      pElement.textContent = `Correct number was  ${randomNumber}`;
      guessButton.remove();
    }
  }
}
