const os = require ("node:os");
console.log ("informacion del sistema operativo");

console.log ("----------------------------------------");
console.log ("nombre del sistema operativo:", os.platform());
console.log ("version del sistema operativo", os.release());
console.log ("arquitectura del S.O", os.arch());j
console.log ("CPU's:", os.cpus().length);
console.log ("memoria total ",os.totalmem())
console.log ("uptime", os.uptime /60 /60, "horas");

