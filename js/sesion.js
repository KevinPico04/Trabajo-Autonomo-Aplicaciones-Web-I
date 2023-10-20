// Esta función valida el formulario de inicio de sesión
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Realiza la validación de los campos, por ejemplo, asegurándote de que el email y la contraseña no estén vacíos
  
    if (!email || !password) {
      alert('Por favor, complete todos los campos.');
      return false;
    }
  
    // Si la validación es exitosa, puedes enviar los datos al servidor para autenticación
  }
  
  // Esta función valida el formulario de registro
  function validateRegister() {
    const name = document.getElementById('name').value;
    const registerEmail = document.getElementById('register-email').value;
    const registerPassword = document.getElementById('register-password').value;
  
    // Realiza la validación de los campos, por ejemplo, asegurándote de que todos los campos estén completos y de que el email sea válido
  
    if (!name || !registerEmail || !registerPassword) {
      alert('Por favor, complete todos los campos.');
      return false;
    }
  
    if (!isValidEmail(registerEmail)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return false;
    }
  
    // Si la validación es exitosa, puedes enviar los datos al servidor para el registro
  }
  
  // Función para validar un email
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
  