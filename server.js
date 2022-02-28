const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    console.log('request come', request.url);
    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html',
            // 'Content-Security-Policy': 'default-src http: https:', // 只能使用外链js
            // 'Content-Security-Policy': 'default-src \'self\'' //只能使用本域名的外链js
            // 'Content-Security-Policy': 'default-src \'self\' https://s.momocdn.com/' //只能使用本域名的外链js
            // 'Content-Security-Policy': 'default-src \'self\'; report-uri /report', //不加载资源 && 报告错误
            // 'Content-Security-Policy-Report-only': 'default-src \'self\'; report-uri /report' //只报告错误
            
        })
        response.end(html);
    } else {
        response.writeHead(200, {
            'Content-Type': 'application/javascript'
        })
        response.end('console.log("load url")')
    }
    
}).listen(8888);


console.log('server listening on 8888');