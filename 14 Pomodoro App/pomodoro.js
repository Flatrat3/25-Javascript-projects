// Getting HTML Element;
const pomodoroButton = document.querySelector(".pomodoro-button");
const shortBreakButton = document.querySelector(".short-break-button");
const longBreakButton = document.querySelector(".long-break-button");
const timer = document.querySelector("h1");
const startButton = document.querySelector(".start-button");
const pauseButton = document.querySelector(".pause-button");

let timerInterval;

// Addevent listeners for buttons;
document.addEventListener("DOMContentLoaded", () => {
    function updateMod(mode, minutes, background) {
        document
            .querySelectorAll(".pomodoro-header button")
            .forEach((button) => {
                button.style.border = "none";
                button.style.color = "white";
                button.style.fontSize = "16px";
                button.style.cursor = "pointer";
                button.style.height = "28px";
                button.style.boxShadow = "none";
                button.style.padding = "2px 12px";
                button.style.background = "none";

                const selectedButton = document.querySelector(`.${mode}-button`);
                selectedButton.style.background = `rgba(0, 0, 0, 0.15)`;

                timer.textContent = `${minutes}:00`;
                document.body.style.background = background;
            });
    }

    function updateTimer(totalSeconds) {
        startButton.style.display = "none";
        pauseButton.style.display = "inline-block";

        let seconds = totalSeconds;

        timerInterval = setInterval(() => {
            seconds--;

            const minuteDisplay = Math.floor(seconds / 60);
            const secondDisplay = Math.floor(seconds % 60);

            timer.textContent = `${minuteDisplay < 10 ? "0" : ""}${minuteDisplay}:${secondDisplay < 10 ? "0" : ""
                }${secondDisplay}`;

            if (seconds <= 0) {
                clearInterval(timerInterval);
                startButton.style.display = "inline-block";
                pauseButton.style.display = "none";
            }

        }, 1000);
    }

    pomodoroButton.addEventListener("click", () => {
        const currentTime = timer.textContent.split(":");
        const totalSeconds = parseInt(currentTime[0]) * 60 + parseInt(currentTime[1]);
        updateMod("pomodoro", 25, "rgb(186, 73, 73)");
        clearInterval(timerInterval)
    });

    shortBreakButton.addEventListener("click", () => {
        const currentTime = timer.textContent.split(":");
        const totalSeconds = parseInt(currentTime[0]) * 60 + parseInt(currentTime[1]);
        updateMod("short-break", "01", "rgb(56, 133, 138)");
        clearInterval(timerInterval)
    });

    longBreakButton.addEventListener("click", () => {
        updateMod("long-break", 15, "rgb(57, 112, 151)");
        clearInterval(timerInterval)
    });

    startButton.addEventListener("click", () => {
        const currentTime = timer.textContent.split(":");
        const totalSeconds = parseInt(currentTime[0]) * 60 + parseInt(currentTime[1]);
        updateTimer(totalSeconds);

    })


});
