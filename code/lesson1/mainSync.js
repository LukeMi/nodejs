
// reference： http://www.runoob.com/nodejs/nodejs-callback.html

//同步操作
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");