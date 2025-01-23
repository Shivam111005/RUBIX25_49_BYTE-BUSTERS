
// JavaScript logic to check password match
document.getElementById('signupForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');


    // Check if passwords match
    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        errorMessage.textContent = "Passwords do not match. Please try again.";
    } else {
        errorMessage.textContent = ""; // Clear the error message
        alert("Sign up successful!");
    }
});