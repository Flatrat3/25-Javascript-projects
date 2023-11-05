const ulElement = document.querySelector(".time-left");
const liElements = ulElement.querySelectorAll("li");
const hourSpan = liElements[0].querySelector("span");
const minutesSpan = liElements[1].querySelector("span");
const secondSpan = liElements[2].querySelector("span");
const message = document.querySelector(".message")
const container = document.querySelector(".container")
const animation = document.querySelector("dotlottie-player")
let time;

function calculate(event) {
  event.preventDefault();
  let birthday = document.getElementById("birthday");
  let birthdayValue = birthday.value;
  if (birthdayValue === "") {
    alert("Please enter a date");
  } else {
    if (time) {
      clearInterval(time);
    }

    time = setInterval(update, 1000);

    function update() {
      let todayDate = new Date();
      // Azerbaijan time zone
      let birthdayDate = new Date(birthdayValue + 'T00:00:00');
      let timeDifference = birthdayDate - todayDate;

      if (timeDifference === 0) {
        message.style.display = "block";
        container.style.display = "none";
        animation.style.display = "block";
        clearInterval(time);
      } else {
        let hours = Math.floor(timeDifference / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        ulElement.classList.add("active");

        hourSpan.textContent = `Hours: ${hours}`;
        minutesSpan.textContent = `Minutes: ${minutes}`;
        secondSpan.textContent = `Seconds: ${seconds}`;
      }
    }
  }
}
