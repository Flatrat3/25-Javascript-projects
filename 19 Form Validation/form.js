
// Getting Elements
const form = document.querySelector(".myForm")
let passwordInput = document.getElementById("password")
let passToggleBtn = document.getElementById("pass-toggle-btn")
let thankYouMessage = document.getElementById("thanks-message")


// Error handling function
const showError = (field, errorText) => {
    // will select field inputs
    field.classList.add("error")
    const errorElement = document.createElement("small")
    errorElement.classList.add("error-text")
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement)
}

// Password strength check

const checkPasswordStrength = (password) =>
    // We will send the password later from the password input value
    /^(?=.*\d)(?=.*[a-z])(?=.)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)



// Validate Password

const validatePassword = (password) => {
    if (password = "") {
        showError(passwordInput, "Enter your password")
    } else if (!checkPasswordStrength(password)) {
        showError(passwordInput, "Please enter at least 8 characters with a number, symbol, lowercase, and uppercase letter."
        )
    }
}


// Const handle Form data

const handleFormData = (e) => {
    e.preventDefault();

    const [fullNameInput, emailInput, dateInput, genderInput] = [
        // document.getElementById('fullname')
        "fullname",
        "email",
        "date",
        "gender"
    ].map((id) => document.getElementById(id))


    // Getting input value
    const [fullname, email, password, date, gender] = [
        fullNameInput,
        emailInput,
        passwordInput,
        dateInput,
        genderInput
    ].map((input) => input.value.trim())


}






form.addEventListener("submit", handleFormData)