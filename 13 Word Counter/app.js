// Getting HTML Element
let textInput = document.querySelector("textarea")
let character = document.querySelector(".characters span")
let words = document.querySelector(".words span")
let auido = new Audio("assets/Keyboard.mp3")

textInput.addEventListener("input", () => {
    auido.play()
    let text = textInput.value;

    // Updating character count
    character.textContent = text.length;

    // Update word count
    let textArray = text.split(/\s+/); // Spliting by whitespace (space, tab, newline, etc.)
    words.textContent = textArray.length;
});

// Second method 
function WordCount(str) { 
    return str.split(" ").length;
  }
  
  console.log(WordCount("add 1 to totalsoFar to account for extra space since 1 space = 2 words"));


  let wordssss= "add 1 to totalsoFar to account for extra space since 1 space = 2 words"
  console.log(wordssss.split(" "))
  console.log(wordssss.split(" ").length)