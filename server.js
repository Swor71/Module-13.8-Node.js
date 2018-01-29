var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    
    fs.readFile('./index.html', 'utf-8', function (err, data) {
        if (err) throw err;

        response.setHeader("Content-Type", "text/html; charset=utf-8");
        if (request.url === '/') {
            response.write(data);
            response.end();
        } else {
            var png = fs.readFileSync('./404.png');
            response.setHeader("Content-Type", "image/png");
            response.statusCode = 404;
            response.end(png, '404');
        }
    })
});

server.listen(8080);