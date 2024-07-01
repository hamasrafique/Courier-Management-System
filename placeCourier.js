document.addEventListener("DOMContentLoaded", function() {
    const courierForm = document.getElementById("courierForm");
    const trackingCodeContainer = document.getElementById("trackingCodeContainer");
    const trackingCode = document.getElementById("trackingCode");

    courierForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Assuming all form fields are filled and validated before submission
        // You can add your validation logic here

        // Generate a random tracking code (you can replace it with your own logic)
        const generatedTrackingCode = generateTrackingCode();

        // Display the tracking code
        trackingCode.innerText = generatedTrackingCode;
        trackingCodeContainer.style.display = "block";
    });

    // Function to generate a random tracking code (example)
    function generateTrackingCode() {
        return Math.random().toString(36).substr(2, 8).toUpperCase(); // Example: Generates a random alphanumeric string of length 8
    }
});
