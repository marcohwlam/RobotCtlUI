var app = require('express')();
var http = require('http').Server(app);
app.set('port', 3000);
app.use(require('./router'))
var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('listening on *:' + port);
});

// var sockets = require('./robotCtl/socketEvents')
// sockets(http);
// var io = require( "socket.io" ).listen(http);
//
// io.on( "connection", function( socket ) {
//   console.log('connected');
//     socket.on( 'python-message', function( msg ) {
//         socket.broadcast.emit( 'message', msg );
//         console.log(msg);
//     });
// });


// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var port = process.env.PORT || 3000;
//
//
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
//   socket.on('python-message', function(msg){
//     console.log(msg);
//   });
// });
//
//
// http.listen(port, function(){
//   console.log('listening on *:' + port);
// });
