document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");
    const thankYouMessage = document.getElementById("thankYouMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Assuming all form fields are filled and validated before submission
        // You can add your validation logic here

        // Show the thank you message
        thankYouMessage.style.display = "block";
    });
});
