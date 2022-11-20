function controllerCalculo() {
    var valor1 = parseInt(document.getElementById("valor-1").value);
    var valor2 = parseInt(document.getElementById("valor-2").value);
    var operacao = parseInt(document.getElementById("operacao").value);

    var resultado = calculo(valor1, valor2, operacao);

    saidaDados("Resultado: " + resultado);
}

function saidaDados(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}

function calculo(valor1 = 0, valor2 = 0, operacao = 0) {
    if (operacao == 1) {
        return valor1 + valor2;
    } else if (operacao == 2) {
        return valor1 - valor2;
    } else if (operacao == 3) {
        return valor1 / valor2;
    } else if (operacao == 4) {
        return valor1 * valor2;
    }
    return null;
}