/*
Módulo os (Información del sistema operativo):

1 Información del sistema operativo:
Muestra por consola el nombre de la plataforma, la arquitectura del sistema y la versión del sistema operativo.

2 Directorio de usuario:
Imprime por consola el directorio del usuario actual.

3 Muestra el resultado utilizando la sintaxis de ES Modules.

4 Utiliza la libreria chalk para personalizar los mensajes impresos en consola.

5 Finalmente crea un script en el package.json que ejecute el código utilizando node (npm run os)

Ejemplo de ejecución:
$ npm run os
1. Información del sistema operativo:
Plataforma: linux
Arquitectura: x64
Versión: 5.15.90.1-microsoft-standard-WSL2
---------------------------------------
2. Directorio de usuario:
/home/fabian
*/


// 1
import chalk from "chalk";
import os from "node:os"

const os = require ("node:os");
console.log (chalk.blueBright("informacion del sistema operativo"));

console.log (chalk.red("----------------------------------------"));
console.log (chalk.green("nombre del sistema operativo:", os.platform()));
console.log (chalk.bgMagenta("version del sistema operativo", os.release()));
console.log (chalk.yellow("arquitectura del S.O", os.arch()));j
console.log (chalk.cyan("CPU's:", os.cpus().length));
console.log (chalk.orange("memoria total ",os.totalmem()))
console.log (chalk.violet("uptime", os.uptime /60 /60, "horas"));



const directorio = path.dirname("/02-modulos-nativos/   ");

