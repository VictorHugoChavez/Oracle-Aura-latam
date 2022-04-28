var botonAdicionar = document.querySelector("#adicionar-paciente")
botonAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var adicionar = document.querySelector("#adicionar");

    var nombre = adicionar.nombre.value
    var peso = adicionar.peso.value
    var altura = adicionar.altura.value
    var gordura = adicionar.gordura.value

    var pacientetr = document.createElement("tr");

    var nombreTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso, altura);

    pacientetr.appendChild(nombreTd);
    pacientetr.appendChild(pesoTd);
    pacientetr.appendChild(alturaTd);
    pacientetr.appendChild(gorduraTd);
    pacientetr.appendChild(imcTd);

    var tabla = document.querySelector("#tabla-pacientes")
    tabla.appendChild(pacientetr)


});