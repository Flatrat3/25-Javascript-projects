// script.js
let countdownInterval;

function calculateTimeRemaining(event) {
    event.preventDefault();
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    if (birthdate > today) {
        countdownInterval = setInterval(updateCountdown, 1000); // Update every 1 second

        function updateCountdown() {
            const timeRemaining = birthdate - new Date();
            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "Happy Birthday!";
                document.getElementById("message").innerHTML = "Have a fantastic day!";
            } else {
                const seconds = Math.floor(timeRemaining / 1000) % 60;
                const minutes = Math.floor(timeRemaining / 1000 / 60) % 60;
                const hours = Math.floor(timeRemaining / 1000 / 60 / 60) % 24;

                document.getElementById("countdown").innerHTML = `Time Remaining: ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
            }
        }
    } else {
        document.getElementById("countdown").innerHTML = "Invalid date.";
    }
}
