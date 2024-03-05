const display = document.getElementById("display");
let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10)
        isRunning = true;
    }

}

function stopTimer() {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;

}

function resetTimer() {
    clearInterval(timer)
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    display.textContent = `00:00:00:00`

}

function update() {

    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);


    display.textContent = `${(hours < 10 ? "0" : "") + hours}:${(minutes < 10 ? "0" : "") + minutes}:${(seconds < 10 ? "0" : "") + seconds}:${(milliseconds < 10 ? "0" : "") + milliseconds}`;





}
