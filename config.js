var http = require('http');

http.createServer(function (req, res) {
    console.log('Server On');
    res.end();
}).listen(8080);