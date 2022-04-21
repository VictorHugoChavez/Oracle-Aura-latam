var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "dark";
pincel.fillRect(0, 0, 600, 400);
var radio = 10;
var xaleatorio;
var yaleatori;

function disemiarCircuferencia(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpiarPnatalla() {
    pincel.clearRect(0, 0, 600, 400);
}


function diseniarobjetivo(x, y) {
    disemiarCircuferencia(x, y, radio + 20, "red");
    disemiarCircuferencia(x, y, radio + 10, "white");
    disemiarCircuferencia(x, y, radio, "red");
}

function sortearPosicion(maximo) {
    return Math.floor(Math.random() * maximo)
}

function actualizarPantalla() {
    limpiarPnatalla();
    xaleatorio = sortearPosicion(600);
    yaleatori = sortearPosicion(400);
    diseniarobjetivo(xaleatorio, yaleatori);
    x++;
}


setInterval(actualizarPantalla, 1000)

function disparar(evento) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop

    if ((x < xaleatorio + radio) && (x > xaleatorio - radio) && (y < yaleatori + radio) && (y > yaleatori - radio)) {
        alert("Tiro Certero");
    }

}

pantalla.onclick = disparar;