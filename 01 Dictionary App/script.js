const inputText = document.querySelector("input");
console.log(inputText);
const infoTextEl = document.querySelector(".info-text");
const antoymus = document.querySelector(".details p");
console.log(antoymus);

inputText.addEventListener("keyup", function (e) {
  let word = e.target.value;
  console.log(word);
  if (e.key == "Enter" && word) {
    fetchApi(word);
  }
});

function fetchApi(word) {
  infoTextEl.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

    
        let antomuys = ""
        for (let i=0; i<4; i++){
            let tag = `<span>${data[0].meanings[0].antonyms[i]},</span>`;
            console.log(tag)
                
        }
      });
  } catch (error) {}
}
