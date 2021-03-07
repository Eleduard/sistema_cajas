var lista = document.querySelectorAll("div#billetaje input.cantidad");
var contador = 0;

const cantidad = document.getElementById("mil");

function billetesDe() {
    for (contador in lista) {
        switch(contador) {
            case 0:
                var valor = document.querySelector(lista[0]);
                valor.value = cantidad.value * 1000;
        }
    }
    //const valor = document.getElementById("valor_1000");
    //valor.value = cantidad.value * 1000;
    //return resultado;
}

//cantidad.addEventListener("keyup", billetesDe());
