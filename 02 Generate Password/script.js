// Getting DOM elements
let input = document.querySelector(".output input");
let password_length = document.querySelector(".password-length input");
let min_length = document.querySelector(".password-length p");
let checkboxs = document.querySelectorAll(".setting div input");
let generate_btn = document.querySelector(".refresh-btn");
let copy_btn = document.querySelector(".material-icons")


const allKeys = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};
// console.log(allKeys["uppercase"])

let length = password_length.value;
let characters = "";

//  range deyisende onun deyeri alib p ye menimsetmek ucun
password_length.addEventListener("input", function () {
    length = password_length.value;
    min_length.textContent = `Length(${length})`;
});

generate_btn.addEventListener("click", () => {
    if (characters) {
        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        input.value = password;
    } else{
        alert('Please select at least one character type')
    }
});

function generateRandom() {
    let target = event.target;
    let character = allKeys[target.id];

    if (target.checked) {
        characters += character;
    } else {
        characters = characters.replace(character, "");
    }
}

checkboxs.forEach((element) => {
    element.addEventListener("click", generateRandom);
});




copy_btn.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value);
    alert( "Copy allowed: " + input.value)
});