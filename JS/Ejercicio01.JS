// --- Comentario de una sola línea ---

/* Comentario
   multilínea 
*/

// Ejercicio 01: Declaración de variables en JavaScript

// 1. Utilizando la palabra reservada VAR
console.warn("-- Declaración de variables utilizando el prefijo VAR --");
var miNombre = "Juan";
console.warn("El valor almacenado de la variable miNombre es:", miNombre);

// Modificar el valor de la variable
miNombre = "Juan Carlos"; 
console.warn("El valor modificado de miNombre es:", miNombre);

var misApellidos; 
console.warn("El valor almacenado de la variable misApellidos es:", misApellidos); 

misApellidos = "Cobos Vega";
console.warn("Después de asignar, misApellidos es:", misApellidos);


// 2. Utilizando la palabra reservada CONST
console.warn("-- Declaración de variables utilizando el prefijo CONST --");
// Una constante no cambia su valor durante la ejecución.
const miMatricula = "240905"; 
console.warn("El valor de la constante miMatricula es:", miMatricula);

// Nota: Si intentas hacer miMatricula = "240000", JavaScript dará error.


// 3. Utilizando la palabra reservada LET
console.warn("-- Declaración de variables utilizando el prefijo LET --");

// Creamos un objeto de fecha (Año, Mes - 1, Día) o mediante string ISO
var fechaNacimiento = new Date("2006-11-03"); 

function calcularEdad(fechaNacimiento) {
    let fechaHoy = new Date(); // Obtenemos la fecha actual
    let milliSegundosPorDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
    
    // Calculamos la diferencia de tiempo en milisegundos y convertimos a días
    let diasVividos = (fechaHoy.getTime() - fechaNacimiento.getTime()) / milliSegundosPorDia;
    
    console.log("Días vividos desde el nacimiento:", Math.floor(diasVividos));
}

// Llamamos a la función
calcularEdad(fechaNacimiento);

// Autor: Juan Carlos Cobos Vega 240905