var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);


function exibirAlerta(evento) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    console.log(evento);
    alert(x + " , " + y);
    dibujarCirculo();
}

function dibujarCirculo(evento) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
    console.log(x + " , " + y);
}
console.log("Hola")

pantalla.onclick = dibujarCirculo;
//pantalla.onclick = exibirAlerta; // la forma correcta es no poner paralenticis cuando tomamos la funcion onclick