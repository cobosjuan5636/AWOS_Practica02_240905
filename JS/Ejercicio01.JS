//comentario de una sola linea 

/* comentario
---
multilinea 
*/

//ejercicio 01: Declaracion  de variables en javascript

//1. utilizando la palabra reservada var

console.warn("--Declaracion de variables utilizando el prefigo VAR --")
var miNombre = "juan"
console.warn("El valor almacenado de la variable miNombre es :" ,miNombre)

//modificar el nombre de la variable

var miNombre = "juan carlos"
console.warn("El valor almacenado de la variable miNombre es :" ,miNombre)

var misApellidos;
console.warn("El valor almacenado de la variable misApellido es :" ,misApellido)

//una variable puede cambiar su valor durante su ejecusion del programa

console.warn("--Declaracion de variables utilizando el prefigo CONST --")
//2. utilizando la palbra reservada const
//una constante  a  diferencia de una variable es que el valor no cambia durante toda la ejecucion del rograma y al momento de ser declarada 

var miMatricula = "240905"
console.warn("El valor de la constante  miMatricula es :" ,miMatricula)

//inetentando modificar el valor de la constante 

//miMatricula = "240000"

//3. utilizando la palabra reservada LET
//LET es el prefigo utilizado muy similar a VAR  con la diferencia en su almacenamiento 
var fechaNacimiento = new Date("03-11-2006") 

function calcularEdad(fechaNacimiento)
{

    var fechaHoy = Date();
    let milliSegundosPorDia = 24*60*60*1000;
    let diasVividos = (hoy - fechaNacimiento)/milliSegundosPorDia
}
// autor : Juan Carlos Cobos Vega 240905