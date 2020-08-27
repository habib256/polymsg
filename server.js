// ThymioHTTP via Javascript for Thymio Suite

var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
var server = app.listen(3000);

var socket;
var io = require('socket.io').listen(server);

io.sockets.on('connection', newConnection);
function newConnection(_socket) {
    socket = _socket;
    console.log('new connection: ' + socket.id);
    //socket.on('thymio', thymioMsg);
}

function thymioMsg(_data) {
    data = _data;
   // io.sockets.emit('thymio', data);
}


app.use(express.static('www'));

console.log("PolyMsg HTTP server running at http://127.0.0.1:3000");


