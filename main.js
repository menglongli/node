// ===========node.js回调函数===============
// 使用require('fs')载入fs模块，模块中所有方法都有同步和异步两种形式。
// fs.readFile('',function(){}) 是异步函数，用于读取文件
//阻塞代码示例================
    /*var fs = require("fs")
    var data = fs.readFileSync('input.txt');
    console.log(data.toString());
    console.log("程序执行结束!");
    */
// $ node main.js
// 菜鸟教程官网地址：www.runoob.com
// 程序执行结束
// =========================
// 非阻塞代码实例==================
    /*var fs = require("fs");
    fs.readFile('input.txt', function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
    });
    console.log("程序执行结束!");
    */
// $ node main.js
// 程序执行结束!
// 菜鸟教程官网地址：www.runoob.com
//==================================
// 事件循环
// 引入event模块
var events = require('events');
//创建eventEmitter 对象
var eventEmitter = new events.EventEmitter();
//创建事件处理程序
var connectHandler = function connected(arg1,arg2){
    console.log("连接成功");
    console.log(arg1);
    console.log(arg2);
    // 触发data_received事件
    eventEmitter.emit('data_received','limenglong2','21994');
}
//绑定connection 事件处理事件
eventEmitter.on('connection',connectHandler);
//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function(a1,a2){
    console.log("数据接收成功");
    console.log(a1);
    console.log(a2);
})
// 触发 connection 事件
eventEmitter.emit('connection','limenglong','1994');
console.log('程序执行完毕');
// ========================================================











































