// Getting HTML Element
let userInput = document.getElementById("password")
let eye = document.querySelector(".container .inputBox .fa-eye")
let eyeSlash = document.querySelector(".container .inputBox .fa-eye-slash")
// console.log(userInput.type); //password
let minLenght = document.getElementById("length")
let lowerCase = document.getElementById("lowercase")
let upperCase = document.getElementById("uppercase")
let number = document.getElementById("number")
let specialCharcter = document.getElementById("speacial-character")

// PassToggle
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



function checkPassword() {

    let value = userInput.value
    // console.log(value);

    //! Regex
    const passLength = new RegExp('(?=.{8,})')
    // console.log(passLength.test(value));
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special = new RegExp('(?=.*[!@#$%^&*()])')


    //! check pass
    if (passLength.test(value)) {
        // console.log(minLenght.firstChild.nextSibling);
        minLenght.firstChild.nextSibling.style.background = "blue"
        // console.log(minLenght.lastChild.previousSibling);
        minLenght.lastChild.previousSibling.style.color = "gray"
    } else {
        minLenght.firstChild.nextSibling.style.background = "gray"
        minLenght.lastChild.previousSibling.style.color = "black"
    }

    // Check lowerCase

    if (lower.test(value)) {
        lowerCase.firstChild.nextSibling.style.background = "blue"
        lowerCase.lastChild.previousSibling.style.color = "gray"
    } else {
        lowerCase.firstChild.nextSibling.style.background = "gray"
        lowerCase.lastChild.previousSibling.style.color = "blue"
    }

    // Check upperCase
    if (upper.test(value)) {
        upperCase.firstChild.nextSibling.style.background = "blue"
        upperCase.lastChild.previousSibling.style.color = "gray"
    } else {
        upperCase.firstChild.nextSibling.style.background = "gray"
        upperCase.lastChild.previousSibling.style.color = "blue"
    }


}

