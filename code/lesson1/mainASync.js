
// 异步操作，读取文件结束回调
var fs = require("fs");
fs.readFile('input.txt',function name(err,data) {
    if (err) {
        return console.error(err);
    }else{
        console.log(data.toString());
    }
})
console.log("程序执行结束!");