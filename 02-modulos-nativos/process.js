const process = require("node:process");

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
