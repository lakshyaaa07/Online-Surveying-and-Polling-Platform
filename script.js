
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('bd-theme');
    const themeText = document.getElementById('bd-theme-text');

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';

        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeText.textContent = `Toggle theme (${newTheme})`;
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
        themeText.textContent = `Toggle theme (${savedTheme})`;
    }
});
    
// Function to validate email address
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate password
function isValidPassword(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Password must contain at least one uppercase letter, one lowercase letter, and one number
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber;
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from actually submitting
    
        // Custom validation logic
        const emailInput = form.querySelector("#inputEmail4");
        const emailValue = emailInput.value.trim();
        const passwordInput = form.querySelector("#inputPassword");
        const passwordValue = passwordInput.value;
    
        if (!isValidEmail(emailValue)) {
            // Display an error message for invalid email
            emailInput.classList.add("is-invalid");
        } else if (!isValidPassword(passwordValue)) {
            // Display an error message for invalid password
            passwordInput.classList.add("is-invalid");
        } else {
            // Form is valid; you can submit it here or perform other actions
            // For this example, we'll show an alert
            alert("Signed-up Successfully!");
    
            // You can also reset the form after successful submission
            form.reset();
        }
    });

    // Remove the "is-invalid" class when the input fields change
    form.querySelectorAll("input").forEach(function (input) {
        input.addEventListener("input", function () {
            this.classList.remove("is-invalid");
        });
    });
});
