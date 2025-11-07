// Step 1: Select all the elements we need (DOM Selection)
const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getelementbyId("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Error Messages// html ln 26, ln 45 ,ln 61 ln 80 //
const usernameError = document.getElementById("usernameErrror");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordInput = document.getElementById("confirmPassword");


//if saved, load username from LOCALsTORAGE//
window.addEventListener("DOMContentLoaded",()=>{
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
});