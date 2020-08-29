


var socket = io.connect('ws://127.0.0.1:3000');
//var socket = io.connect('ws://192.168.43.105:3000');

let titre;
let ip;

function preload() {
  //loads in text file as lines of text
	ip = loadStrings('ip.txt');

}

function setup() {
  titre = createElement('h1', 'PolyMsg'+"@"+ip);
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