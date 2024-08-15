document.addEventListener('DOMContentLoaded', function() {
    const profile = JSON.parse(localStorage.getItem('profile')) || {};
    const profileDetails = document.getElementById('profileDetails');
    const profilePicturePreview = document.getElementById('profilePicturePreview');

    // Mostrar la información del perfil almacenado
    if (profile.username) {
        profileDetails.innerHTML = `
            <img src="${profile.profilePicture || 'default-profile.png'}" alt="Profile Picture" id="profilePicturePreview">
            <p>Nombre de Usuario: ${profile.username}</p>
            <p>Ciudad: ${profile.city}</p>
            <p>País: ${profile.country}</p>
            <p>Fecha de Nacimiento: ${profile.dob}</p>
        `;
        profilePicturePreview.src = profile.profilePicture || 'default-profile.png';
    }

    // Mostrar la vista previa de la imagen seleccionada
    document.getElementById('profilePicture').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicturePreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const storedProfile = JSON.parse(localStorage.getItem('profile')) || {};
    const username = document.getElementById('username').value || storedProfile.username;
    const city = document.getElementById('city').value || storedProfile.city;
    const country = document.getElementById('country').value || storedProfile.country;
    const dob = document.getElementById('dob').value || storedProfile.dob;

    let profilePicture = document.getElementById('profilePicture').files[0];

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const updatedProfile = {
                username,
                city,
                country,
                dob,
                profilePicture: e.target.result
            };
            localStorage.setItem('profile', JSON.stringify(updatedProfile));
            alert('Perfil guardado exitosamente!');
            location.reload();
        };
        reader.readAsDataURL(profilePicture);
    } else {
        const updatedProfile = {
            username,
            city,
            country,
            dob,
            profilePicture: storedProfile.profilePicture
        };
        localStorage.setItem('profile', JSON.stringify(updatedProfile));
        alert('Perfil guardado exitosamente!');
        location.reload();
    }
});

function signOut() {
    localStorage.removeItem('profile');
    alert('Sesión cerrada!');
    window.location.href = 'signin.html';
}
