var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/', function(req, res){
//     res.send('<h1>Welcome Realtime Server</h1>');
// });

http.listen(3000, function(){
    console.log('listening on *:3000');
});

io.on('connection', function(socket) {
    //接收并处理客户端的hi事件
    socket.on('hi', function(data) {
        console.log(data);

        //触发客户端事件c_hi
        socket.emit('c_hi','hello too!')
    })

    //断开事件

    socket.on('likai', function(data) {
        console.log('断开',data)
        socket.emit('c_leave','leave too!');
        //socket.broadcast用于向整个网络广播(除自己之外)
        //socket.broadcast.emit('c_leave','某某人离开了')
    })

});
