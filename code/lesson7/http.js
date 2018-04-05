var http = require('http');


function onRequest(request,response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World ,你是我的小苹果");
    response.end();
}

http.createServer(onRequest).listen(8001);