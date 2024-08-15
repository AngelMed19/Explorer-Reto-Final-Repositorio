document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const city = document.getElementById('signupCity').value;
    const country = document.getElementById('signupCountry').value;
    const dob = document.getElementById('signupDob').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { email, username, password, city, country, dob };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro exitoso!');
    window.location.href = 'signin.html';
});