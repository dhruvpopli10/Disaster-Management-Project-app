// Login Functionality
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});

// Disaster Form Submission
document.getElementById('disasterForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const disasterType = document.getElementById('disasterType').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const weather = document.getElementById('weather').value;
    const safety = document.getElementById('safety').value;

    // For now, we'll just log this to the console.
    console.log(`Disaster Type: ${disasterType}`);
    console.log(`Location: ${location}`);
    console.log(`Date: ${date}`);
    console.log(`Weather Prediction: ${weather}`);
    console.log(`Safety Prediction: ${safety}`);

    alert('Disaster information submitted successfully!');
});
