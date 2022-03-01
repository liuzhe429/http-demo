const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    if (request.url === '/') {
        console.log('request come', request.url);
        const html = fs.readFileSync('test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html',
            // 'Connection': 'close'
        })
        response.end(html);
    } else {
        const jpg = fs.readFileSync('test.jpg');
        response.writeHead(200, {
            'Content-Type': 'image/jpg',
            // 'Connection': 'close'
        });
        response.end(jpg);
    }
    
}).listen(8888);


console.log('server listening on 8888');