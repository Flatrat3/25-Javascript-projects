// Getting HTML Element;
const pomodoroButton = document.querySelector(".pomodoro-button");
const shortBreakButton = document.querySelector(".short-break-button");
const longBreakButton = document.querySelector(".long-break-button");
const timer = document.querySelector("h1");
const startButton = document.querySelector(".start-button");
const pauseButton = document.querySelector(".pause-button");

// Addevent listeners for buttons;

document.addEventListener("DOMContentLoaded", () => {
    let timerInterval;

    function updateMod(mode, minutes, background) {
        document
            .querySelectorAll(".pomodoro-header button")
            .forEach((button) => {
                // console.log(button);
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

    pomodoroButton.addEventListener("click", () => {
        updateMod("pomodoro", 25, "rgb(186, 73, 73");
    });

    shortBreakButton.addEventListener("click", () => {
        updateMod("short-break", 5, "rgb(56, 133, 138");
    });

    longBreakButton.addEventListener("click", () => {
        updateMod("long-break", 15, "rgb(57, 112, 151");
    });


});
