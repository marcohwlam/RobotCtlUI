function sockets(server) {
  var io = require('socket.io')(server),
      matchMakingQueue = [];
      io.on('connection', function(socket){
        socket.on('chat message', function(msg){
          io.emit('chat message', msg);
        });
        socket.on('python-message', function(msg){
          console.log(msg);
        });
}

module.exports = sockets;
