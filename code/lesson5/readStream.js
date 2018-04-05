
//读取文件流
var fs = require('fs');
var data = '';

//创建可读流
var readStream = fs.createReadStream('input.txt');

//设置编码 
readStream.setEncoding('UTF8');

//处理流事件

readStream.on('data',function (chunk) {
    data += chunk;
});

readStream.on('end', function () {
    console.log(data);
});

readStream.on('error', function (err) {
    console.log(err.stack);
});