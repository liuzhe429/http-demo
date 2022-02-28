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
    } else {
        response.end('server');
    }
    
}).listen(8888);


console.log('server listening on 8888');