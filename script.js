document.addEventListener('DOMContentLoaded', function() {
    // Show sign up form when "Sign Up" link is clicked
    document.getElementById('showSignUpForm').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signUpForm').style.display = 'block';
    });

    // Show login form when "Sign In" link is clicked
    document.getElementById('showLoginForm').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('signUpForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });
});


//contact us

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    document.getElementById('contactForm').style.display = 'none'; // Hide the form
    document.getElementById('thankYouMessage').style.display = 'block'; // Show the thank you message
  });
//   placeCourier//

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
        window.location.href = 'signIn.html';
    });
});
console.log("Welcome to Classic Script.js");
