// Para criar um servidor web com o Node

var http = require ("http");
http.createServer(function(req, res) {
    res.end("Meu primeiro server")
}).listen(8081);
console.log("Servidor Rodando!!!")