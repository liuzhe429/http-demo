const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    if (request.url === '/') {
        console.log('request come', request.url);
        // 302 临时跳转 后续路由可能还会修改
        // 301 永久重定向 慎重！！！！
        // 200 无用
        response.writeHead(301, {
            'Location': '/new'
        })
        response.end('123');
    }
    if (request.url === '/new') {
        console.log('request come', request.url);
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end('<div>this is html content</div>')
    }
    
}).listen(8888);


console.log('server listening on 8888');