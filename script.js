// Step 1: Select all the elements we need (DOM Selection)
const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Error Messages// html ln 26, ln 45 ,ln 61 ln 80 //
const usernameError = document.getElementById("usernameErrror");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


//if saved, load username from LOCALsTORAGE//
window.addEventListener("DOMContentLoaded",()=>{
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
});
console.log("DomContentLoaded event");
//(parameters) => { function body } = const myFuntion= function(){
//function body//
// };          //

function showError(input,message,span) {
    span.textContent = message;
    InputDeviceInfo.style.borderColor = "FF0000"; // red border  for error
    console.log("showError called");
     console.log("Username saved to localStorage");
}


function clearError(input, span ) {
    span.textContent = "";
    input.style.borderColor = "008000"; //green border for success 
    console.log("clearError called");
}

