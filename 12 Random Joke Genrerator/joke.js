// Define constants and variables
const categories = document.querySelector("strong + .category-text");
const joke = document.querySelector(".joke");
const refresh = document.querySelector(".buttons button .fa-sync");
const copied = document.querySelector(".fa-copy");
const copiedText = document.querySelector(".copied-text");
const twitter = document.querySelector(".fa-x-twitter");
let volume = new Audio("assets/Frog.mp3"); // Adding audio
let data; // Declare data in a higher scope

// Fetch data
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getFetchData() {
  try {
    const response = await fetch(url);
    data = await response.json(); // Assign data in the higher scope
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}


// Event listener for refresh button
refresh.addEventListener("click", async () => {
  await getFetchData();
  if (data) {
    categories.textContent = data.category;
    joke.textContent = data.joke;
    volume.play();
  }
});

// Copy joke function
let copyJoke = () => {
  if (data) {
    copied.style.display = "none";
    copiedText.style.display = "block";
    navigator.clipboard.writeText(joke.textContent);
    setTimeout(() => {
      copied.style.display = "block";
      copiedText.style.display = "none";
    }, 800);
  }
};

// Tweet joke function
let twitJoke = () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${joke.textContent}`;
  window.open(tweetUrl, "_blank");
};

// Event listeners for copy and tweet buttons
copied.addEventListener("click", copyJoke);
twitter.addEventListener("click", twitJoke);
