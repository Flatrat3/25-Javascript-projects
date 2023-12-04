const displayHour = document.querySelector(".hours");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");


document.addEventListener("DOMContentLoaded", () => {
    const time = setInterval(updateTime, 1000);
});

const updateTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();



    displayHour.textContent = `${hours < 10 ? "0" + hours : hours}`
    displayMinutes.textContent = `${minutes < 10 ? "0" + minutes : minutes}`
    displaySeconds.textContent = `${seconds < 10 ? "0" + seconds : seconds}`




};
