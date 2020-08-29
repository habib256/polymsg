let titre;
let data

function preload() {
  //loads in text file as lines of text
  //ip = loadStrings('ip.js);
}

function setup() {
  titre = createElement('h1', 'PolyMsg');
  titre.position(10, -20);
}

function draw() {
  // put drawing code here
}

// Socketio Events

socket.on('connect', () => {
  if (socket.connected) { 
  console.log("Socketio connected to server. Great !");
}
});

socket.on('ping', ping);
async function ping() {
  console.log('Ping');
  socket.emit('pong','Pong');
}