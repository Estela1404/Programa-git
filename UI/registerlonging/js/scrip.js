document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let message = document.getElementById('message');

    if (email === "admin@example.com" && password === "123456") {
        message.textContent = "Inicio de sesión exitoso";
        message.style.color = "green";
    } else {
        message.textContent = "Correo o contraseña incorrectos";
        message.style.color = "red";
    }
});
