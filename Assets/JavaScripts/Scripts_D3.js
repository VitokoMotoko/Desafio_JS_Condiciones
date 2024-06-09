function verificarPassword() {
    // Obtener los valores de los selects
    var digit1 = document.getElementById("digit1").value;
    var digit2 = document.getElementById("digit2").value;
    var digit3 = document.getElementById("digit3").value;

    // Concatenar los dígitos para formar el password
    var password = digit1 + digit2 + digit3;

    // Obtener el elemento de resultado
    var resultado = document.getElementById("resultado");

    // Verificar el password
    if (password === "911") {
        resultado.textContent = "Password 1 correcto";
    } else if (password === "714") {
        resultado.textContent = "Password 2 correcto";
    } else {
        resultado.textContent = "Password incorrecto";
    }
}