/*
 * Created by Ho Wang Lam
 * marcohwlam@hotmail.com
 * Copyright (c) Seamless Compute 2019.
 */

const app = require('express')();
const http = require('http').Server(app);
app.set('port', 3000);
app.use(require('./router')(http));
const port = process.env.PORT || 3000;
// var sockets = require('./robotCtl/socketEvents')(http);
http.listen(port, function(){
  console.log('listening on *:' + port);
});

