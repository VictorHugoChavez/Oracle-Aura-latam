//document.write("<h1>Hola</h1>");


function dibujarCuadroVerde(valor, y, color) {
    var pantalla = document.getElementById("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color;
    pincel.fillRect(valor, y, 50, 50);
    pincel.strokeStyle = "black";
    pincel.strokeRect(valor, y, 50, 50) ///stoke es un borde

}

for (i = 0; i < 600; i = i + 50) {
    dibujarCuadroVerde(i, 0, "red");
    dibujarCuadroVerde(i, 50, "yellow");
    dibujarCuadroVerde(i, 100, "green");
}