// Step 1: Select all the elements we need (DOM Selection)

const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
window.addEventListener("DOMContentLoaded", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        usernameInput.value = savedUsername;
        alert("Pre-filled username from localStorage: " + savedUsername);
        //instead of console log I put alert  to display saved username from local storage//
    }
});
function showError(input, message, span) {
    span.textContent = message;
    input.style.borderColor = "#FF0000";
}
function clearError(input, span) {
    span.textContent = "";
    input.style.borderColor = "#008000";
}
function validateUsername() {
    const value = usernameInput.value.trim();
    if (value.length < 6) {
        showError(usernameInput, "Username must be at least 6 characters.", usernameError);
        return false;
    }
    clearError(usernameInput, usernameError);
    return true; // Valid username
}
function validateEmail() {
    if (!emailInput.validity.valid) {
        showError(emailInput, "Please enter a valid email address.", emailError);
        return false;
    }
    clearError(emailInput, emailError);
    return true;
}
function validatePassword() {
    const value = passwordInput.value;
    if (!passwordInput.validity.valid) {
        showError(
            passwordInput,
            "Password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number.",
            passwordError
        );
        return false;
    }
    clearError(passwordInput, passwordError);
    return true;
}
function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        showError(
            confirmPasswordInput,
            "Passwords do not match.",
            confirmPasswordError
        );
        return false;
    }
    clearError(confirmPasswordInput, confirmPasswordError);
    return true;
}
usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", () => {
    validatePassword();
    validateConfirmPassword();
});
confirmPasswordInput.addEventListener("input", validateConfirmPassword);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const formIsValid =
        isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
    if (!formIsValid) {
        return;
    }
    localStorage.setItem("username", usernameInput.value.trim());
    alert("Registration successful!");
});