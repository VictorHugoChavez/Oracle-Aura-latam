/*DEFINICION DE LAS CLASES */
export class cliente {
    nombreCliente;
    idCliente;
    idUsuario;
    edad;
    dinero;
}




/*Definición de clases*/
export class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
    }
}