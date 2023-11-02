const inputText = document.querySelector("input");
const container = document.querySelector(".container");
const infoText = document.querySelector(".info-text");
let synoymsList = document.querySelector(".list");
let audio;

// Sending data when clicking enter

inputText.addEventListener("keyup", (e) => {
  let word = e.target.value;
  // console.log(e);
  // console.log(word);
  if (e.key == "Enter" && word) {
    fetchApi(word);
  }
});

function fetchApi(word) {
  container.classList.remove("active");
  infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.title) {
          // console.log(data.title)
          infoText.innerHTML = `Unable to find the meaning of the word <span>"${word}"</span>. Please, Search for another word.`;
        } else {
          container.classList.add("active");
          document.querySelector(".word p").innerText = `Word  ${data[0].word}`;
          document.querySelector(
            ".word span"
          ).innerText = `noun ${data[0].phonetic}`;
          document.querySelector(
            ".meaning span"
          ).innerText = `${data[0].meanings[0].definitions[0].definition}`;
          let span = document.querySelector(".synoyms span");
          audio = new Audio(data[0].phonetics[0].audio);
          console.log(audio);
          let synonyms = data[0].meanings[0].synonyms;

          if (data[0].meanings[0].synonyms[0] === undefined) {
            synoymsList.innerHTML = "NA";
          } else {
            synoymsList.innerHTML = "";
            for (let i = 0; i < synonyms.length; i++) {
              let tag = `<span>${data[0].meanings[0].synonyms[i]},</span>`;
              synoymsList.insertAdjacentHTML("beforeend", tag);
            }
          }
        }
      });
  } catch (error) {}
}
