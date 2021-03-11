var listaCantidad = document.querySelectorAll("div#billetaje input.cantidad");
var listaValor = document.querySelectorAll("div#billetaje input.valor");
var suma = 0;
document.getElementById("sumatoria").addEventListener("focus", sumar);

function sumar() {
    for (el of listaValor) {
        var num = parseFloat(el.value);
        suma += num;
    }
    document.getElementById("sumatoria").innerHTML = suma;
    console.log(suma);
}

//casTotal.value = suma;

function billetesDe() {
        listaValor[0].value = listaCantidad[0].value * 1000;
        listaValor[1].value = listaCantidad[1].value * 500;
        listaValor[2].value = listaCantidad[2].value * 200;
        listaValor[3].value = listaCantidad[3].value * 100;
        listaValor[4].value = listaCantidad[4].value * 50;
        listaValor[5].value = listaCantidad[5].value * 20;
        listaValor[6].value = listaCantidad[6].value * 10;
        listaValor[7].value = listaCantidad[7].value * 1;
        listaValor[8].value = listaCantidad[8].value * 1;
}




//cantidad.addEventListener("keyup", billetesDe());
