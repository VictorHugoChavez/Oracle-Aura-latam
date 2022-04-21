var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "dark";
pincel.fillRect(0, 0, 600, 400);
let x = 0;
let y = 1;

function disemiarCircuferencia(x, y, radio) {
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpiarPnatalla() {
    pincel.clearRect(0, 0, 600, 400);
}

function actualizarPantalla() {
    limpiarPnatalla();
    if (x > 600) {
        y = -1
    } else if (x < 0) {
        y = 1;
    }
    disemiarCircuferencia(x, 20, 10)
    x = x + y;
    console.log(x);
    console.log(y);
}



setInterval(actualizarPantalla, 10)