 //__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径
console.log('__filename= ' + __filename);

//__dirname 表示当前执行脚本所在的目录。
console.log('__dirname= ' + __dirname);

// 打印日志
function printHello() {
    console.log("Hello, World!");
}

// 两秒后执行以上函数
var t = setTimeout(() => {
    printHello() ;
}, 2000);

// 清除 t 定时器
clearTimeout(t);


console.log('Hello world');
console.log('byvoid%diovyb');
console.log('byvoid%diovyb', 1991); 

//与console.log() 用法相同，只是向标准错误流输出。
console.error();
//向标准错误流输出当前的调用栈。
console.trace();

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据');

console.info("程序执行完毕。")
