let titre;
let data

function preload() {
  //loads in text file as lines of text
  //ip = loadStrings('ip.js);
  data = loadJSON("http://192.168.43.53:3000/data");
}

function setup() {
  titre = createElement('h1', data.titre);
  titre.position(10, -20);
  titre = createElement('h2', data.content);
  titre.position(10, 80);
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
  socket.emit('pong','pong');
}
//Input Events
function myInputEvent() {
  console.log('you are typing: ', this.value());
}