// Basic HTTP Backend Server
'use strict';

const { networkInterfaces } = require('os');
const nets = networkInterfaces();
const results = Object.create(null); // or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }

            results[name].push(net.address);
        }
    }
}

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
//console.log(results["wlp6s0"][0]);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
  });

  

