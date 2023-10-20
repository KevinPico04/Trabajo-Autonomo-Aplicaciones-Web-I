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
    showLoginForm('home.html');
  });

  tutorButton.addEventListener('click', function () {
    showLoginForm('homep.html');
  });

  function showLoginForm(redirectURL) {
    loginForm.style.display = 'block';
    registerForm.style.display = 'block';

    const loginSubmitButton = document.querySelector('#login-form .btn');
    loginSubmitButton.addEventListener('click', function () {

      window.location.href = redirectURL;
    }); 

  }
    
});
  
  var registerForm = document.getElementById('register-form');
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'home.html';
    window.location.href = 'homep.html';

    
  });

