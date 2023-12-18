// Getting Elements
const form = document.querySelector(".myForm");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");
const thankYouMessage = document.getElementById("thanks-message");

// Error handling function
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
};

// Password strength check
const checkPasswordStrength = (password) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);

// Validate Password
const validatePassword = (password) => {
    if (password === "") {
        showError(passwordInput, "Enter your password");
    } else if (!checkPasswordStrength(password)) {
        showError(
            passwordInput,
            "Please enter at least 8 characters with a number, symbol, lowercase, and uppercase letter."
        );
    }
};

// Handle Form data
const handleFormData = (e) => {
    e.preventDefault();

    const formInputs = ["fullname", "email", "date", "gender"].map((id) =>
        document.getElementById(id)
    );
    console.log(formInputs);

    const [fullNameInput, emailInput, dateInput, genderInput] = formInputs.map(
        (input) => input.value.trim()
    );

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clear previous errors
    document
        .querySelectorAll(".form-group .error")
        .forEach((field) => field.classList.remove("error"));
    document
        .querySelectorAll(".error-text")
        .forEach((errorText) => errorText.remove());

    // Adding case
    if (fullNameInput === "") showError(formInputs[0], "Enter your name");
    if (!emailPattern.test(emailInput)) showError(formInputs[1], "Please enter a valid email address");
    validatePassword(passwordInput.value);
    if (dateInput === "") showError(formInputs[2], "Enter your date");
    if (genderInput === "") showError(formInputs[3], "Select your gender");

    // Check if there are no errors, then proceed
    if (!document.querySelectorAll(".form-group .error").length) {
        form.style.display = "none";
        thankYouMessage.style.display = "block";
    }

};

// Toggle password visibility
passToggleBtn.addEventListener("click", () => {
    passToggleBtn.className = passwordInput.type === "password"
        ? "fa-solid fa-eye-slash"
        : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password"
        ? "text"
        : "password"


})

form.addEventListener("submit", (e) => {
    handleFormData(e);
    passToggleBtn.style.bottom = "44%";
});

