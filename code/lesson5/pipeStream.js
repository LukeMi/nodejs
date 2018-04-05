//管道流

var fs = require('fs');

//创建文件读取流
var readStream = fs.createReadStream('pipe_input.txt');
//创建文件写入流
var writeStream = fs.createWriteStream('pipe_output.txt');

writeStream.on('finish',function ( ) {
    console.log('output.txt 文件写入完成');  
})

writeStream.on('error', function (err) {
    console.log('文件写入错误 '+err.stack);
})

//将文件读取流扔进管道
readStream.pipe(writeStream);

console.log('管道流开始执行！！');


