//Node.js os 模块提供了一些基本的系统操作函数。我们可以通过以下方式引入该模块：
var os = require('os');
 
//返回操作系统的默认临时文件夹。
var tmpdir = os.tmpdir() ;
 //返回 CPU 的字节序，可能的是 "BE" 或 "LE"。
var endianness =os.endianness();
//os.hostname()
var hostName = os.hostname();
//返回操作系统名
var type =	os.type();
//返回操作系统名
var platForm = 	os.platform();
//返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
var arc = os.arch();
//返回操作系统的发行版本。
var release =os.release();
//返回操作系统运行的时间，以秒为单位。
var upTime = os.uptime();
//返回一个包含 1、5、15 分钟平均负载的数组。
var loadAvg = 	os.loadavg();
//返回系统内存总量，单位为字节。
var totalmem = os.totalmem();
//返回操作系统空闲内存量，单位是字节。
var freemem =os.freemem();
//返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
var cpus = os.cpus();
//获得网络接口列表
var netList = os.networkInterfaces();
console.log('tmpdir : '+tmpdir);
console.log('endianness : '+endianness);
console.log('hostName : '+hostName);
console.log('type : '+type);
console.log('platForm : '+platForm);
console.log('arc : '+arc);
console.log('release : '+release);
console.log('upTime : '+upTime);
console.log('loadAvg : '+loadAvg);
console.log('totalmem : '+totalmem);
console.log('freemem : '+freemem);
console.log('cpus : '+cpus
+ " ;cpus.user : "+cpus[0]
);
console.log('netList : '+netList);