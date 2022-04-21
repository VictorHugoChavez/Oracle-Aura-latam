var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);
var color = ["blue", "red", "green"];
var i = 0;

function dibujarCirculo(evento) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    pincel.fillStyle = color[i];
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
    console.log(x + "," + y);
}

pantalla.onclick = dibujarCirculo;

function alterarColor() {
    i++;
    if (i >= color.length) {
        i = 0;
    }
    return false;
}

pantalla.oncontextmenu = alterarColor;