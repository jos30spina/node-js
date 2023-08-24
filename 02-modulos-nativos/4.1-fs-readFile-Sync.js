const fs = require ("node:fs");

console.log ("leyendo el archivo...");
const archivo = fs.readFileSync ("./README.md", "utf-8")

console.log ("leyendo segundo archivo....");
const archivo2 = fs.readFileSync("./package.json", "utf-8");
console.log ("imprimiendo archivo por pantalla ");
console.log (archivo2)