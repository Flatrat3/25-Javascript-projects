// Getting DOM elements
let input = document.querySelector(".output input")
let password_length = document.querySelector('.password-length input');
let min_length = document.querySelector(".password-length p")



const allKeys = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
}


//  range deyisende onun deyeri alib p ye menimsetmek ucun
password_length.addEventListener("input", function () {
    let length = password_length.value
    min_length.textContent = `Length(${length})`
})



