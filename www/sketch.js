

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

//var socket = io.connect('ws://127.0.0.1:3000');
var socket = io.connect('ws://192.168.43.105:3000');

let titre;
let ip;

function setup() {
  titre = createElement('h1', 'PolyMsg');
  titre.position (10, -20);
  ip = createElement('h1', serverip);
  ip.position (10, 50);
}

function draw() {
  // put drawing code here
}

// PING Events
socket.on('serverIP', getServerIP);
async function getServerIP(data) {
    console.log('Ping');
}