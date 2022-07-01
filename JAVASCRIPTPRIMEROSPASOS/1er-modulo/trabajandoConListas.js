//const ciudadesDisponibles = ['Bogita', 'Lima', 'Mexico', 'Colombia'];
//console.log(ciudadesDisponibles[1]);
//console.log(ciudadesDisponibles[0]);


let ciudadesDisponibles = new Array();
ciudadesDisponibles.push('Bogota')
ciudadesDisponibles.push('Mexico')
ciudadesDisponibles.push('Buenos Aires')
ciudadesDisponibles.push('Canada')

for (i = 0; i < ciudadesDisponibles.length; i++) {
    console.log(ciudadesDisponibles[i]);
    console.log(`Tenemos un total de ciudades de ${ciudadesDisponibles.length}`)

}
console.log(ciudadesDisponibles.splice(1, 2));
console.log(ciudadesDisponibles)

const valor = 29;
if (valor >= 18) {
    console.log("la edad es mayor a 18");
} else {
    console.log("La edad es menora 18");
}

let valorxs = 30;

if (valorxs > 31 || valor == 29) {
    console.log("Las variables son true");
} else {
    console.log("La svariables son falsas");
}