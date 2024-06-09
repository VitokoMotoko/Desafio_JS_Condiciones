function verificarStickers() {
    // Obtener los valores de los inputs
    var sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    var sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    var sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    // Calcular la suma de los stickers
    var totalStickers = sticker1 + sticker2 + sticker3;

    // Obtener el elemento de resultado
    var resultado = document.getElementById("resultado");

    // Verificar la cantidad de stickers
    if (totalStickers <= 10) {
        resultado.textContent = "Llevas " + totalStickers + " stickers.";
    } else {
        resultado.textContent = "Llevas demasiados stickers.";
    }
}