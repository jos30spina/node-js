const process = require("node:process");
require("dotenv").config();

console.log(process.cwd());
process.exit(0);
console.log(process.pid);
console.log(process.arch);
console.log(process.platform);
console.log(process.version);

if (process.argv[2] === "dev") {
  console.log("estas en modo desarrollador");
}
process.on("beforeEXIT", () => {
  console.log("el proceso acabo");
});

console.log(process.env.NOMBRE);
console.log(process.env.EDAD);
console.log(process.env.MY_SECRET);

if(process.env.NODE_ENV === "Fabian") {
  console.log("Hola Fabian");
} else if(process.env.NOMBRE === "Angelo") {
  console.log("Hola Angelo");
} else {
  console.log("No te conozco");
}
