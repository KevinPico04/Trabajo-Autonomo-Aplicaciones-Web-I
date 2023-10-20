
// Cargar el menú con JavaScript
document.addEventListener("DOMContentLoaded", function() {
    fetch("menu.html")
        .then(response => response.text())
        .then(menuHtml => {
            // Insertar el menú en el contenedor específico
            document.getElementById("menu-container").innerHTML = menuHtml;

            // Ahora que el menú está cargado, puedes agregar los event listeners
            var menuItem = document.querySelectorAll('.item-menu');
            function selectLink() {
                menuItem.forEach((item) => item.classList.remove('ativo'));
                this.classList.add('ativo');
            }
            menuItem.forEach((item) => item.addEventListener('click', selectLink));

            var btnExp = document.querySelector('#btn-exp');
            var menuSide = document.querySelector('.menu-lateral');
            if (btnExp) {
                btnExp.addEventListener('click', function() {
                    menuSide.classList.toggle('expandir');
                });
            }
        });
});



