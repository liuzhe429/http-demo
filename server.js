const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    if (request.url === '/') {
        console.log('request come', request.url);
        const html = fs.readFileSync('test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html);
    }
    if (request.url === '/script.js') {
        console.log('request come', request.url);
        response.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Cache-Control': 'max-age=10'
        })
        // response.end('console.log("script loaded")');
        response.end('console.log("script loaded twice")');
    }
    
}).listen(8888);


console.log('server listening on 8888');