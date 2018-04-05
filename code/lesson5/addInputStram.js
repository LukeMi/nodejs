// 解决覆盖文件问题
let fs = require('fs');

/* let data = '';

let data2 = '你是我的小苹果';

let readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');
readStream.on('data', chunk => data += chunk);
readStream.on('end', () => write(data));
readStream.on('errot', err => console.log(err.stack));

let write = datas => {
    var writeStream = fs.createWriteStream('outputInput.txt');
    writeStream.write(datas + data2, 'UTF8');
    writeStream.on('finish', () => {
        console.log('文件写入完成');
    });
    writeStream.on('error', err => console.log(err.stack));

} */

//第二种方法

var read = fs.createReadStream('input.txt');
//设置第二个参数append
var write2 = fs.createWriteStream('outputInput.txt', { 'flags': 'a' });
//管道流读写操作
read.pipe(write2);
console.log('执行完毕');