🗂️ Interactive Registration Form

A responsive and interactive user registration form that validates user input in real-time, provides clear feedback, and remembers the username using Local Storage.

📘 Description

This project demonstrates how to create a user-friendly registration form using HTML, CSS, and JavaScript, focusing on:

Input validation (real-time and on submit)

DOM manipulation

Event handling

Local Storage

Users can:

Enter Username, Email, Password, and Confirm Password

See instant error messages for invalid input

Submit the form only when all inputs are valid

Save the username in the browser so it persists after refreshing

Coding concepts demonstrated:

DOM element selection (getElementById, querySelector)

Event listeners (input, submit, click)

HTML5 validation attributes (required, type, minlength, pattern)

Constraint Validation API

Local Storage

Functions and conditional logic

🚀 Getting Started
✅ Dependencies

Any modern web browser (Chrome, Firefox, Edge, Safari)

Operating system: macOS, Windows, Linux

Internet connection only for setup or viewing tutorials

💾 Installing

Clone or download this repository:

git clone https://github.com/Vanessa30043/interactive-registration-form.git


Open the project folder in VS Code or your preferred editor.

▶️ Running the Project

Open index.html in a browser, or use Live Server in VS Code.

Fill in the form:

Enter Username

Enter Email

Enter Password

Enter Confirm Password

Submit the form:

If any input is invalid, an error message appears next to the field.

If all inputs are valid, the form submits successfully and saves the username in Local Storage.

Refresh the page to see that the username persists.

🛠️ Help

If the username does not persist, make sure your browser allows Local Storage.

To clear stored data:

localStorage.clear();


and refresh the page.

👩‍💻 Author

Vanessa Sierra – GitHub Profile

📜 Version History

0.2



Added real-time input validation

Added beginner-friendly notes in code

0.1

Basic HTML, CSS, and JS structure

Initial form setup and submit functionality

📄 License

Not specified

🙏 Acknowledgments

Per-Scholas Software Engineering Curriculum ( Week 5 Lessons 1–6)

W3Schools tutorials for JS, HTML, and CSS basics

Google search for concepts and code examples

💡 Reflection Questions

How did event.preventDefault() help?

It stops the form from reloading the page, so JavaScript can handle validation and display messages.

Difference between HTML5 validation and JS validation:

HTML5 attributes (like required or type="email") provide basic validation.

JS validation allows custom messages and real-time feedback for a better user experience.

How is Local Storage used?

The username is stored using localStorage.setItem() and retrieved using localStorage.getItem() to pre-fill the form.

Limitation: Local Storage is not secure for sensitive information.

Challenges faced with real-time validation:

Making error messages appear only when necessary. 

Ensuring user-friendly messages:

Messages are placed next to the input fields and appear only when the field is invalid