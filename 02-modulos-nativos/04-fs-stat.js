// import fs from "node:fs";
const fs = require ("node:fs");

const stat = fs.statSync ("./README.md");

console.log ("es un directorio");
console.log (stat.isDirectory());

console.log ("es un directorio")
console.log (stat.isFile);

console.log ("tamaño del archivo en bytes");
console.log (stat.size);