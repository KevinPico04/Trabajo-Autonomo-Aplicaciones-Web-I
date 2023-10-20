// Función para cerrar sesión
function cerrarSesion() {
    window.location.href = "index.html";
    console.log("Cerrando sesión...");
}

// Función para previsualizar la imagen seleccionada
function previewImage() {
    var input = document.getElementById('foto');
    var preview = document.getElementById('foto-preview');

    var file = input.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
