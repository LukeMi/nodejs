
const buf = Buffer.from('runoob', 'ascii');
// 输出 72756e6f6f62
console.log(buf.toString('hex'));
// 输出 cnVub29i
console.log(buf.toString('base64'));
// 输出 runoob
console.log(buf.toString('utf8'));

//缓冲区合并  Buffer.concat(list[, totalLength]) ;list - 用于合并的 Buffer 对象数组列表。 ,totalLength - 指定合并后Buffer对象的总长度。
var buffer1 = Buffer.from('菜鸟教程 website: ');
var buffer2 = Buffer.from('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2],10);
console.log('buffer3 = ' + buffer3,'\n');

//缓冲区比较 
var bufferA = Buffer.from('abc');
var bufferB = Buffer.from('abcd');
var result = bufferA.compare(bufferB);
if (result < 0) {
    console.log(bufferA + " 在 " + bufferB + " 之前");
} else if (result == 0) {
    console.log(bufferA + " 与 " + bufferB + " 相同");
} else {
    console.log(bufferA + " 在 " + bufferB + " 之后");
}

//拷贝缓冲区 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]]) ;
//  targetBuffer - 要拷贝的 Buffer 对象。 , targetStart - 数字, 可选, 默认: 0,sourceStart - 数字, 可选, 默认: 0,sourceEnd - 数字, 可选, 默认: buffer.length
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');
//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2,0,120);
console.log(buf1.toString());

//缓冲区裁剪
var sliceBuf = buf1.slice(0);
console.log("裁剪后的buffer : " + sliceBuf.toString());

//缓冲区的长度
console.log('buffer.length = ' + sliceBuf.length);

//缓冲区填充
console.log('sliceBuf.fill(3,2,3) = ' + sliceBuf.fill(3, 2,3));
sliceBuf.fill(3,2,3)



 



