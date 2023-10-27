function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;
  var error = false;

  var emailError = document.getElementById("email-error");
  var passwordError = document.getElementById("password-error");

  emailError.innerHTML = "";
  passwordError.innerHTML = "";

  if (!email.match(emailPattern)) {
    error = true;
    emailError.innerHTML = "Correo Electrónico incorrecto.";
  }

  if (password.length < 6) {
    error = true;
    passwordError.innerHTML = "Contraseña Incorrecta .";
  }

  if (error) {
    return false;
  }

  // Realiza alguna otra acción después de la validación exitosa en el formulario de inicio de sesión
  // Por ejemplo, puedes mostrar un mensaje de éxito o enviar datos al servidor.

  return true; // Permite la redirección si no hay errores
}

function validateRegister() {
  var name = document.getElementById("name").value;
  var registerEmail = document.getElementById("register-email").value;
  var registerPassword = document.getElementById("register-password").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var error = false;

  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("register-email-error");
  var passwordError = document.getElementById("register-password-error");

  nameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";

  if (name.trim() === "") {
    error = true;
    nameError.innerHTML = "Por favor, ingresa un nombre de usuario.";
  }

  if (!registerEmail.match(emailPattern)) {
    error = true;
    emailError.innerHTML = "El correo electrónico no es válido.";
  }

  if (registerPassword.length < 5) {
    error = true;
    passwordError.innerHTML = "Contraseña muy corta (mínimo 5 caracteres).";
  }

  if (error) {
    return false;
  }

  // Realiza alguna otra acción después de la validación exitosa en el formulario de registro
  // Por ejemplo, puedes mostrar un mensaje de éxito o enviar datos al servidor.
  window.location.href = "home.html";
  return true; // Permite la redirección si no hay errores
}
