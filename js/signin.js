document.getElementById('signinForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Inicio de sesión exitoso!');
        window.location.href = 'home.html';
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
});
