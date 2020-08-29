// Basic HTTP Backend Server

// GET LOCAL SERVER IP 
'use strict';
const { networkInterfaces } = require('os');
const nets = networkInterfaces();
const ipresults = Object.create(null); // or just '{}', an empty object
for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!ipresults[name]) {
                ipresults[name] = [];
            }

            ipresults[name].push(net.address);
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
app.get('/net', showJSON);
function showJSON(req, res) {
    res.send(ipresults);
}

app.use(express.static('www'));

console.log("PolyMsg HTTP server running at http://127.0.0.1:3000");
//console.log(ipresults["wlp6s0"][0]);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
  });

  

