// Getting HTML Elements
const input = document.getElementById("input");
const message = document.querySelector(".message");
const guessButton = document.querySelector(".guess-btn");
const chance = document.querySelector(".left-chance span");
let pElement = chance.parentElement;
let leftChance = 3;
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
let congratsAudio = new Audio("./clap.wav");
let failAuido = new Audio("./Fail Sound Effects.mp3")


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
    if (leftChance > 0) {
      leftChance--;
      chance.textContent = `${leftChance} `;
      input.value = ""
      input.focus()
      console.log(leftChance)
      if (inputValue > randomNumber) {
        message.textContent = "Your Guess is High👍.";
      } else if (inputValue < randomNumber) {
        message.textContent = "Your Guess is low👎.";
      } else if (inputValue === randomNumber) {
        message.textContent = `Congratulation You Win! The Number was ${randomNumber}`;
        congratsAudio.play()
        guessButton.remove();
        pElement.remove();
      } else {
        message.textContent = "Please write a valid number";
      }
    } else {
      message.textContent = "You Lose the Game, Try Again Next Time";
      failAuido.play()
      pElement.textContent = `Correct number was  ${randomNumber}`;
      guessButton.remove();
    }
  }
}
