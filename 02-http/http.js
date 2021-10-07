var http = require('http');

http.createServer(function(req, res){
    res.end("Oi");
    
}).listen(8801);

console.log("Servidor rodando!");