const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopupEstudiante = document.querySelector('.btnLogin-estudiante');
const btnPopupTutor = document.querySelector('.btnLogin-tutor');
const iconClose = document.querySelector('.icon-close');
const welcomeBox = document.querySelector('.welcome-box');


btnPopupEstudiante.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  welcomeBox.style.display = 'block';
  loginRegisterBox.style.display = 'block';
});

btnPopupTutor.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  welcomeBox.style.display = 'block';
  loginRegisterBox.style.display = 'block';
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  welcomeBox.style.display = 'none';
  loginRegisterBox.style.display = 'none'; 
});


loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const estudianteButton = document.querySelector('.btnLogin-estudiante');
  const tutorButton = document.querySelector('.btnLogin-tutor');
  const loginForm = document.querySelector('.form-box.login');
  const registerForm = document.querySelector('.form-box.register');
  
  
  estudianteButton.addEventListener('click', function () {
    if (showLoginForm('home.html', 'login-form')) {
      // Realiza la redirección solo si la validación es exitosa
      window.location.href = 'home.html';
    }
  });

  tutorButton.addEventListener('click', function () {
    if (showLoginForm('homep.html', 'login-form')) {
      // Realiza la redirección solo si la validación es exitosa
      window.location.href = 'homep.html';
    }
  });


  function showLoginForm(redirectURL, formId) {
    // Obtén una referencia al formulario
    const form = document.getElementById(formId);
  
    // Agrega un listener para el evento "submit" del formulario
    form.addEventListener('submit', function (event) {
      if (formId === 'login-form' && !validateLogin()) {
        // Si es el formulario de inicio de sesión y la validación no pasa, evita la redirección
        event.preventDefault();
      } else if (formId === 'register-form' && !validateRegister()) {
        // Si es el formulario de registro y la validación no pasa, evita la redirección
        event.preventDefault();
      } else {
        // Realiza la redirección si la validación es exitosa
        window.location.href = redirectURL;
      }
    });
  }
  
  // Resto de tu código
  
    
});
  
 

