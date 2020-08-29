// Basic HTTP Backend Server

// GET LOCAL SERVER IP 
let serverip;
'use strict';
const { networkInterfaces } = require('os');
const nets = networkInterfaces();
//console.log(nets);
const ipresults = Object.create(null); // or just '{}', an empty object
for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!ipresults[name]) {
                ipresults[name] = [];
            
            }

            ipresults[name].push(net.address);
            serverip=ipresults[name][0];
        }
    }
}
// WRITE DOWN SERVER IP TO FILE
fs = require('fs');
fs.writeFile('www/ip.js', "socket = io.connect('ws://"+serverip+":3000')", function (err) {
  if (err) return console.log(err);
  console.log("Prepare ip.js for socket.io connection: "+serverip);
});

// INITIALIZE EXPRESS HTTP SERVER
var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
var server = app.listen(3000);

app.get('/net', showJSON);
function showJSON(req, res) {
    res.send(ipresults);
    io.sockets.emit('serverIP', serverip);
    console.log("Emit ip from server");
}

app.use(express.static('www'));
console.log("PolyMsg HTTP server running at http://"+serverip+":3000");

// INITIALIZE SOCKETIO
var io = require('socket.io').listen(server);

io.sockets.on('connection', newConnection);
function newConnection(_socket) {
    console.log('new connection: ' + _socket.id);
}

