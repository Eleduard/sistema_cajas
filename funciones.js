function billetesDe() {
    var cantidad_1000 = document.arqueo.prueba.value;
    var resultado = cantidad_1000 * 1000;
    return resultado;
}

const elemento = document.getElementById("valor_1000");
elemento.innerHTML = billetesDe();