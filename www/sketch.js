
var socket = io.connect('ws://localhost:3000');

let titre;

function setup() {
  titre = createElement('h1', 'PolyMsg');
  titre.position (10, -20);
}

function draw() {
  // put drawing code here
}

// PING Events
socket.on('ping', thymioPing);
async function thymioPing(data) {
    console.log('Ping');
    await selectedNode.emitEvents({ "ping": null });
}