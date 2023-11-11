window.onload = function () {
    addColor()
}

// Creating 9 box 
for (let i = 1; i <= 9; i++) {
    const box = document.createElement("div")
    box.classList.add('box')
    document.querySelector(".container").appendChild(box)
    box.style.cursor = "pointer"
    // Anyone who clicks on the box should copy
    box.addEventListener("click", () => {
        navigator.clipboard.writeText(box.innerHTML)
        toastr.success(".Copied to clipboard", { timeOut: 3000 })
    })
}

// Getting HTML Elements
const button = document.querySelector(".btn")
const randomColor = document.querySelectorAll(".box")


// Function get random Color
function randomHexColorCode() {
    let letters = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;

}

function addColor() {
    randomColor.forEach(box => {
        let newColor = randomHexColorCode();
        box.style.backgroundColor = newColor;
        box.innerHTML = newColor
    })

}