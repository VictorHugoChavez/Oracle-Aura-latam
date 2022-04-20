//document.write("<h1>Hola</h1>");
var pantalla = document.getElementById("canvas");
var pincel = pantalla.getContext("2d"); // todo los graficos y dibujos

pincel.fillStyle = "lightgrey" // propiedad// se define el color que desaa en ingles
pincel.fillRect(0, 0, 600, 400)
    /// es una funcion que viene por defecto
    // los dos primeros parametros son correspondientes a "x" y "y", y lo demas son el tamaño que

//verlo como un batlla naval de cordenadas

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 200, 400);
pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200, 400);


// esto es para el caso de un trinagulo
pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300, 200); /// esto es por las cordenas del centro
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

//esto es para un circulo
pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14) // los dos primeros parametros son de ubicacion,el tamaño de la radio de nuestro circulo ,despues el angulo y luego el angulo donde va terminar
pincel.fill();