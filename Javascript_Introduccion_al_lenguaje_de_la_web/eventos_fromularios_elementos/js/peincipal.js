/* var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
console.log("Estory imprimiendo desde una fuente externa");

 */



var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = parseInt(tdPeso.textContent);
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = parseFloat(tdAltura.textContent);


    var tdIMC = paciente.querySelector(".info-imc")

    let pesoEsValido = true;
    let alturaEsValido = true;


    if ((peso < 0) || (peso > 1000)) {
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-incorrecto")
    }
    if ((altura < 0) || (altura > 4.00)) {
        tdIMC.textContent = "Altura Inavalida";
        alturaEsValido = false;
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-incorrecto")
    }


    if (pesoEsValido && alturaEsValido) {

        tdIMC.textContent = calcularIMC(peso, altura);

    }

}

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}