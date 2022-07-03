import { CuentaCorriente } from '../JAVASCRIPT_ORIENTADA_OBJETOS/aula2/cuentaCorriente.js';
import { cliente } from '../JAVASCRIPT_ORIENTADA_OBJETOS/aula2/cliente.js';


const cuentaDeLeonardo = new CuentaCorriente();
//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual es ' + saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('El Saldo actual es ' + saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log('El Saldo actual es ' + saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(10)
console.log('El Saldo actual es ' + saldo);


const cliente1 = new cliente();
cliente1.nombreCliente = "VIC";
cliente1.idCliente = "12569472";
cliente1.idUsuario = "24126";
cliente1.edad = "25";
cliente1.dinero = 1564;

const cliente2 = new cliente();
cliente2.nombreCliente = "Fernanda";
cliente2.idCliente = "62446521";
cliente2.idUsuario = "25652";
cliente2.edad = "26";
cliente2.dinero = 54312;

const cliente3 = new cliente();
cliente3.nombreCliente = "Marja";
cliente3.idCliente = "21652251";
cliente3.idUsuario = "231230";
cliente3.edad = "28";
cliente3.dinero = 169641;


console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

console.log(cliente1.nombreCliente);
console.log(cliente1.idCliente);
console.log(cliente1.idUsuario);
console.log(cliente1.edad);
console.log(cliente1.dinero);

const nombreCliente = "Victor";
const idCliente = "12569472";
const idUsuario = "24126"
const edad = "25";
const dinero = 1653;

const nombreCliente2 = "Marja";
const idCliente2 = "34652134";
const idUsuario2 = "63852"
const edad2 = "24";
const dinero2 = 2313;