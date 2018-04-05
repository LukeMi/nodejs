//写入流
var fs = require('fs');
var data = '菜鸟教程官网地址：www.runoob.com';

var writeStream = fs.createWriteStream('write.txt');
 writeStream.write(data,'UTF8');
 writeStream.end();
writeStream.on('finish' ,function () {
     console.log('写入完成');
 })

writeStream.on('error',function (err) {
    console.log(err.stack);
})

console.log("写入流已经执行");
