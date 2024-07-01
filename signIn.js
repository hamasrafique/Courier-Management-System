document.querySelector('.sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Clear any previous error messages
    let errorMsg = document.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }

    // Validate the username and password
    if (username === 'SP23-BSCS-0189') {
        if (password === '12345') {
            // If both are correct, redirect to newMainpage.html
            window.location.href = 'newMainpage.html';
        } else {
            // If the password is incorrect, show an error message
            showError('Incorrect password.');
        }
    } else {
        // If the username is incorrect, show an error message
        showError('Username is not correct.');
    }
});

function showError(message) {
    // Create an error message element
    const errorMsg = document.createElement('p');
    errorMsg.classList.add('error-message');
    errorMsg.textContent = message;

    // Insert the error message into the form
    const form = document.querySelector('.sign-in-form');
    form.insertBefore(errorMsg, form.firstChild);
}
