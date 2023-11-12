// Getting HTML Element
let userInput = document.getElementById("password")
let eye = document.querySelector(".container .inputBox .fa-eye")
let eyeSlash = document.querySelector(".container .inputBox .fa-eye-slash")
console.log(userInput.type); //password


function passToggle() {
    if (userInput.type == "password") {
        userInput.type = "text";
        eye.style.display = "none";
        eyeSlash.style.display = "inline";
    } else {
        userInput.type = "password";
        eye.style.display = "inline";
        eyeSlash.style.display = "none";
    }
}