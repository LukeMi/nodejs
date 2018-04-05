/* process.on('exit', function (code) {
    // 以下代码永远不会执行
    setTimeout(function () {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});

console.log('程序执行结束'); */

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);


// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage(),'\n');

// 返回 Node 已经运行的秒数。
console.log(process.uptime());

// 获取进程的用户标识(参见 getuid(2))。这是数字的用户 id，不是用户名。
console.log(process.getgid());

// 获取进程的用户标识(参见 getuid(2))。这是数字的用户 id，不是用户名。
// console.log(process.getuid());


process.exit(0);
