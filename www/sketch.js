
var socket; 
//var socket = io.connect('ws://192.168.43.105:3000');

let titre;
let ip;

function preload() {
  //loads in text file as lines of text
  ip = loadStrings('ip.txt');
  
}

function setup() {
  socket = io.connect('ws://'+ip+':3000');
  titre = createElement('h1', 'PolyMsg'+"@"+ip);
  titre.position (10, -20);
}

function draw() {
  // put drawing code here
}

// PING Events
//socket.on('serverIP', getServerIP);
//async function getServerIP(data) {
//    console.log('Ping');
//}