var fs = require("fs");
/* fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
})

var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());
console.log("程序执行完毕。", '\n');

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function (err, data) {
    if (err) {
        return console.error(err);
    } else {
        console.log("文件打开成功！"+'\n');
    }

});

//以下为通过异步模式获取文件信息的语法格式：
fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats.toString() +'\n');
    console.log(
        'stats.isFile() = ' + stats.isFile() + '\n'
        + 'stats.isDirectory() = ' + stats.isDirectory() + '\n'
        + 'stats.isBlockDevice() = ' + stats.isBlockDevice() + '\n'
        + 'stats.isCharacterDevice() = ' + stats.isCharacterDevice() + '\n'
        + 'stats.isSymbolicLink() = ' + stats.isSymbolicLink() + '\n'
        + 'stats.isFIFO() = ' + stats.isFIFO() + '\n'
        + 'stats.isSocket() = ' + stats.isSocket() + '\n'
    );         
}); */

//以下为异步模式下写入文件的语法格式：

var data = '草房子';
fs.writeFile('output.txt', data,function (err) {
    if (err) {
        return console.error(err);
    }
    console.error('文件保存成功');
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.open('output.txt', 'r+', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
})





