document.addEventListener("DOMContentLoaded", function() {
    var imagen = document.getElementById("imagen");

    imagen.addEventListener("click", function() {
        // Verificar si la imagen tiene el borde rojo
        if (imagen.style.border) {
            // Si tiene borde, quitarlo
            imagen.style.border = "";
        } else {
            // Si no tiene borde, agregarlo
            imagen.style.border = "2px solid red";
        }
    });
});