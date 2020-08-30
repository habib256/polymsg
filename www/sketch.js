let datas = [];
let titre;

function preload() {
  //loads in text file as lines of text
 // serverip = loadStrings('ip.txt');
  datas = loadJSON("http://"+serverip+":3000/data");
  
}

function setup() {
  
  titre = createElement('h1', datas[0].titre);
  titre.position(10, -20);
  titre = createElement('h2', datas[0].content);
  titre.position(10, 80);
  
}

function draw() {
  // put drawing code here
}

// Socketio Events

socket.on('connect', () => {
  if (socket.connected) { 
  console.log("Socketio connected to server: "+serverip+" Great !");
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