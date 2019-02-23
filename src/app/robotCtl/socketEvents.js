/*
 * Created by Ho Wang Lam
 * marcohwlam@hotmail.com
 * Copyright (c) Seamless Compute 2019.
 */

function sockets(server) {
    console.log('in sockets fun');
    var io = require('socket.io')(server);
    console.log(io);
    io.on('connection', function (socket) {
        console.log('connected');
        socket.on('chat message', function (msg) {
            io.emit('chat message', msg);
        });
        socket.on('python-message', function (msg) {
            console.log(msg);
        });
    });
}

module.exports = sockets;
