// Select the first element with the class ".container" in the HTML
const container = document.querySelector(".container");

// A for loop that runs 300 times
for (let i = 0; i < 300; i++) {
    // Create a div element with the name "square"
    const square = document.createElement("div");
    // Add the class "square" to the "square" element
    square.classList.add("square");

    // Add a function that changes the color and shadow in response to the "mouseover" event
    square.addEventListener("mouseover", () => {
        // Call the function that changes the color and shadow
        setColorToEl(square);

        // Add a function that resets the color and shadow in response to the "mouseout" event
        square.addEventListener("mouseout", () => {
            // Call the function that resets the color and shadow
            resetColorToEl(square);
        });

        // Add a function that changes the color and shadow in response to the "click" event
        square.addEventListener("click", () => {
            // Call the function that changes the color and shadow
            setColorToEl(square);
        });
    });

    // Add the created "square" element to the "container" element
    container.appendChild(square);
}

// A function that assigns a random color to an element
function setColorToEl(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// A function that resets the background color and shadow of an element
function resetColorToEl(element) {
    element.style.backgroundColor = "rgba(95, 184, 224, 1)";
    element.style.boxShadow = "0 0 2px #ffffff";
}

// A function that generates a random color
function getRandomColor() {
    // Letters and numbers used to create a color code
    let letters = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}
