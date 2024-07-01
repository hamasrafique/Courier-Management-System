document.addEventListener("DOMContentLoaded", function() {
    const courierForm = document.getElementById("courierForm");
    const trackingForm = document.getElementById("trackingForm");
    const courierMessage = document.getElementById("courierMessage");
    const trackingNumber = document.getElementById("trackingNumber");
    const trackingDetails = document.getElementById("trackingDetails");
    const courierDetails = document.getElementById("courierDetails");

    let couriers = {}; // Object to store couriers details

    // Function to generate a random tracking code (example)
    function generateTrackingCode() {
        return Math.random().toString(36).substr(2, 8).toUpperCase(); // Example: Generates a random alphanumeric string of length 8
    }

    courierForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const senderName = document.getElementById("senderName").value;
        const receiverName = document.getElementById("receiverName").value;
        const address = document.getElementById("address").value;
        const packageDetails = document.getElementById("packageDetails").value;

        // Generate tracking code
        const trackingCode = generateTrackingCode();

        // Store courier details
        couriers[trackingCode] = {
            senderName,
            receiverName,
            address,
            packageDetails
        };

        // Display the tracking code and thank you message
        trackingNumber.textContent = trackingCode;
        courierMessage.style.display = "block";
    });

    trackingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the tracking number from the input
        const trackingInput = document.getElementById("trackingInput").value;

        // Find the courier details
        const courier = couriers[trackingInput];

        if (courier) {
            // Display courier details
            courierDetails.textContent = `Sender Name: ${courier.senderName}\nReceiver Name: ${courier.receiverName}\nAddress: ${courier.address}\nPackage Details: ${courier.packageDetails}`;
            trackingDetails.style.display = "block";
        } else {
            courierDetails.textContent = "Invalid tracking number. Please try again.";
            trackingDetails.style.display = "block";
        }
    });
});
