const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    console.log('request come', request.url);
    if (request.url === '/') {
        // 临时跳转 后续路由可能还会修改
        // 301 永久重定向 慎重！！！！
        // 200 无用
        response.writeHead(302, {
            'Location': '/new'
        })
        response.end();
    }
    if (request.url === '/new') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end('<div>this is html content</div>')
    }
    
}).listen(8888);


console.log('server listening on 8888');