
var socket = io.connect('ws://192.168.43.105:3000');

let titre;

function setup() {
  titre = createElement('h1', 'PolyMsg');
  titre.position (10, -20);
}

function draw() {
  // put drawing code here
}

// PING Events
socket.on('serverIP', getServerIP);
async function getServerIP(data) {
    console.log('Ping');
}