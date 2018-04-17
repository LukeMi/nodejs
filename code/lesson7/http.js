var http = require('http');


function onRequest(request,response) {
    response.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
    response.write("Hello World ,你是我的小苹果,222222222");
    response.end();
}

http.createServer(onRequest).listen(8001);