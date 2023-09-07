/*
Módulo process (Gestión de procesos):
1 Argumentos de línea de comandos:
Utiliza los argumentos de línea de comandos para mostrar por consola el mensaje "Hola {nombre}" donde {nombre} es el argumento que se pasa al ejecutar el script desde la terminal.
2 Salir del proceso:
Muestra un mensaje de despedida cuando el proceso haya finalizado.
3 Entorno del proceso:
Muestra por consola el valor de una variable de entorno específica para mostrar el mensaje "Estamos en desarrollo" cuando el valor de NODE_ENV sea "development" y "Estamos en producción" cuando sea "production".
4 Utiliza la sintaxis de commonJS.
5 Finalmente crea un script en el package.json que ejecute el código utilizando node (npm run saludar)
 Ejemplo de ejecución:
$ npm run saludar "Fabian Gomez"
Hola Fabian Gomez
Estamos en desarrollo
Adios el proceso ha terminado!


*/

// importamos el modulo process por buenas practicas.

const process = require ("node:process");
 
// Obtener el argumento de línea de comandos
const nombre = process.argv[2];

// Mostrar el mensaje de saludo
console.log("hola "+ nombre);

// Obtener el valor de la variable de entorno NODE_ENV
const nodeEnv = process.env.NODE_ENV;

// Mostrar el mensaje según el valor de NODE_ENV
if (nodeEnv === "development") {
  console.log("Estamos en desarrollo");
} else if (nodeEnv === "production") {
  console.log("Estamos en producción");
}

// Mostrar el mensaje de despedida
console.log("Adios el proceso ha terminado!");