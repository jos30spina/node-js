const http = require ("node:http"); 
const PORT = 3000;

const server = http.createServer ((req,res)=>{
    console.log ("peticion recibida")
    res.end ("es mi primera pagina web", req.url);
})

server.listen(PORT, ()=> {
console.log ('El servidor est escuchando en http://localhost${PORT');
})

server.listen(port)



