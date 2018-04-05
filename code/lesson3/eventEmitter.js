
// reference: http://www.runoob.com/nodejs/nodejs-event.html

//引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//使用匿名函数名绑定 some_event 事件
eventEmitter.on('delayEvent', function () {
    console.log('delayEvent 事件被触发');
})


setTimeout(() => {
    eventEmitter.emit('delayEvent');
}, 2000);

console.log('start execut \n');

var someEventListener1 = function (arg1, arg2) {
    console.log('someEventListener1', arg1, arg2 ,'\n');
}

var someEventListener2 = function (arg1, arg2) {
    console.log('someEventListener2', arg1, arg2, '\n');
}
// 事件可以多个处理，即一个事件可以有多个监听器
eventEmitter.on('someEvent', someEventListener1);
eventEmitter.on('someEvent', someEventListener2);

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'someEvent');
console.log(eventListeners + " 个监听器监听连接事件。\n");

//触发一次 ，两个监听都回调
eventEmitter.emit('someEvent', 'first arg1 参数', 'arg2 参数');

// 一次触发事件------------------------
eventEmitter.once('onceEvent', function (arg1, arg2) {
    console.log('oncelistener1', arg1, arg2);
});

//触发两次
eventEmitter.emit('onceEvent', 'onceEvent_first arg1 参数', 'onceEvent arg2 参数');
eventEmitter.emit('onceEvent', 'onceEvent_twice arg1 参数', 'onceEvent arg2 参数');

//移除 method ：someEvent ，listener：someEventListener1；
eventEmitter.removeListener('someEvent', someEventListener1);
eventEmitter.emit('someEvent', 'third arg1 参数', 'arg2 参数');
eventEmitter.emit('someEvent', 'fourth arg1 参数', 'arg2 参数');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'someEvent');
console.log(eventListeners + " 个监听器监听连接事件。\n");

//移除 method 所有事件
eventEmitter.removeAllListeners('someEvent');
 
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'someEvent');
console.log(eventListeners + " 个监听器监听连接事件。\n");

// error 事件
eventEmitter.emit('error');






