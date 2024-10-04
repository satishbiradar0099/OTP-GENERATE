// Get all input fields
const inputs = document.querySelectorAll('.otp-input');

// Loop through each input field and handle events
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Move to the next input field if a digit is entered
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
        // Move to the previous input field if the input is cleared
        else if (input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Handle backspace key
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// Handle OTP form submission
document.getElementById('otpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const otpValue = Array.from(inputs).map(input => input.value).join('');

    // Assuming OTP is valid, redirect to a new page
    if (otpValue.length === 6) {  // Ensure all 6 digits are filled
        alert(`Entered OTP: ${otpValue}`);
        // Redirect to another page after OTP is verified
        window.location.href = 'success.html';  // Replace 'success.html' with your destination page
    } else {
        alert('Please enter all 6 digits of the OTP');
    }
});
