const fs = require ("node:fs");

console.log ("leyendo mi primer carchivo ...");

fs.readFile (".README.md", "utf-8", (err,data)=>{
    if ( err){
        console.log ("error leyendo archivo");
    }
    console.log ("contenido de mi primer archivo ", data)
});
console.log ("haciendo cosas mientras se lee el archivo...");
fs.readFile ("./package.json", "utf-8", (err,data)=>{
    if (err){
        console.log (err);
    }
    
})