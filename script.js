document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from actually submitting

    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.getElementById('gender').value;

    // Simple validation
    if (!fullName || !username || !email || !phone || !password || !confirmPassword || !gender) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Construct the data object to be sent to the server
    const data = {
        fullName: fullName,
        username: username,
        email: email,
        phone: phone,
        password: password,
        gender: gender
    };

    // Send data to the server (in this example, we'll just log the data to console)
    console.log('Registration Data:', data);
});
