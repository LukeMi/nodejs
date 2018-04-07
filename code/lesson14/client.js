var http = require('http');

var url = require('url');

var option = {
    host : 'localhost',
    port : '8080',
    path : 'index.html'
}

var callback = function(response){
    var body ='';
    response.on('data',function(data){
        body += data;
    });
    response.on('end',function(){
        console.log('数字据接受完成');
    })
}

var req = http.request(option,callback);
req.end();