const shuffleButton = document.querySelector(".shuffle-button");
const imgs = document.querySelectorAll("img");
const result = document.querySelector("h3");
const auido = new Audio("Rolling Dice.mp3")

function shuffle() {
  let sum = 0;
  let product = 1

  imgs.forEach((img) => {
    let random = Math.floor(Math.random() * 6) + 1;
    img.setAttribute("src", `img/${random}.png`);
    sum += random;
    product *= random;
    result.textContent = `Sum: ${sum}, Product: ${product}`;
  });

}

function anim() {
  result.textContent = ""

  setTimeout(shuffle, 1000);
  imgs.forEach((img) => {
    img.setAttribute("src", "img/dice-roll.gif");
    auido.play();
  });
}

shuffleButton.addEventListener("click", anim);
