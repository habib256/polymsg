let data;
let mode;

function preload() {
  //loads in text file as lines of text
  //ip = loadStrings('ip.js);
  data = loadJSON("http://"+serverip+":3000/data");
}

function setup() {
  let titre = createElement('h1', 'PolyMsg<br>Administration');
  titre.position(10, -20);
  let inputPasswrdTxt = createElement('h1', 'password :');
  inputPasswrdTxt.position(10, 90);
  let inputPasswrd = createInput('');
  inputPasswrd.position(10, 170);
  inputPasswrd.input(myInputEvent);
  let button = createButton('Connect');
  button.position(30, 250);
  button.size(200, 50);
  button.mousePressed(checkPassword);
}

function draw() {
  // put drawing code here
}

//Input Events
function myInputEvent() {
  console.log('you are typing: ', this.value());
  console.log(this);
}

function checkPassword() {
}

// Socketio Events
socket.on('connect', () => {
  if (socket.connected) { 
  console.log("Socketio connected to server "+serverip+" Great !");
}
});

socket.on('ping', ping);
async function ping() {
  console.log('Ping');
  socket.emit('pong','pong');
}
