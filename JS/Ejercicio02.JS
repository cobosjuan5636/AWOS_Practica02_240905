console.log("%c1.- Ejercicio 02: tipos de datos",style_console);


console.warn("1.- UNDEFINED (No Definido )")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores actuales de dos variables ");
console.log('usuarioLogeado =${usuarioLogeado}');
console.log('rolUsuario =${rolUsuario}');
console.log('ultimoAcceso =${ultimoAcceso}');
        
console.log("Valores actuales de las variables ");
console.log('usuarioLogeado =${typeof{usuarioLogeado}}');
console.log('rolUsuario =${typeof{rolUsuario}}');
console.log('ultimoAcceso =${typeof{ultimoAcceso}}');

//soporta que un usuario llamada JuanCarlo se a logeado exitosamente 

usuarioLogeado = "JuanCarlos"

// pero no solo cambia su valor si no tambien su tipo 

console.log('El valor de la variable usuarioLogeadoes: ${usuarioLogeado} y su nuevo tipo de dato es : ${typeof{usuarioLogeado}');

//2.Boolean (tru/false) - verdadero o falsp

var hayUsuarioLogeado = false

console.log('El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que es tipo : ${typeof{hayUsuarioLogeado}}');
if(hayUsuarioLogeado == true)
    {
        console.log("Dado a que se a logeado un usuario,La app mostrara el menu de usuario")
}
else if (!hayUsuarioLogeado){
    console.log("Dado que no hay usuarios registrados la app no mostrara el menu de usuarios")
}
else{
    console.log("No se puede procesar este tipo de dato ")
}

//test : usuario logeado = true
hayUsuarioLogeado=true;
console.log("Test 1")
validacionUsuarioLogeado();

//test2 : usuario logeado = false
console.log("Test 2")
hayUsuarioLogeado = false;
validacionUsuarioLogeado();

// test 3: usuario logeado = a cualquier otra cosa 
console.log("Test 3")
hayUsuarioLogeado= 52.5;
validacionUsuarioLogeado();

//3. number(numericos)

let userID = 225
let costoPropiedad = 125000.50
let latitudGPS  = 20.240508
let altitudGPS = 1180 

console.log('los valores de las variables declaradas  para los datos de la propiedad son:
    ID del usuario p ropietario: ${userID_owner}
    ')