/*
 * Created by Ho Wang Lam
 * marcohwlam@hotmail.com
 * Copyright (c) Seamless Compute 2019.
 */

module.exports = function (server) {
    const express = require('express');
    const router = express.Router();
    const fs = require('fs');
    const bodyParser = require('body-parser');
    const io = require('socket.io')(server);

    router.use(bodyParser.urlencoded({extended: true}));
    router.use(bodyParser.json());
    router.use(express.static('.'));

// index
    router.get('/', function (req, res) {
        fs.readFile('./src/app/UI/public/index.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    });

    router.post('/control', function (req, res) {
        console.log(req.body);
        io.to('robot channel').emit('cmd', req.body);
        res.end();
    });

    console.log(io);
    io.on('connection', function (socket) {
        console.log('connected');
        // socket.on('chat message', function (msg) {
        //     io.emit('chat message', msg);
        // });
        socket.on('python-message', function (msg) {
            console.log(msg);
        });
        socket.join('robot channel');
    });
    return router;
};
