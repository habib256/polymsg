let data

function preload() {
  //loads in text file as lines of text
  //ip = loadStrings('ip.js);
}

function setup() {
  let titre = createElement('h1', 'PolyMsg<br>Administration');
  titre.position(10, -20);
  let inputLoginTxt = createElement('h1', 'login :');
  inputLoginTxt.position(10, 70);
  let inputLogin = createInput('');
  inputLogin.position(10, 140);
  inputLogin.input(myInputEvent);
  let inputPasswrdTxt = createElement('h1', 'password :');
  inputPasswrdTxt.position(10, 170);
  let inputPasswrd = createInput('');
  inputPasswrd.position(10, 240);
  inputPasswrd.input(myInputEvent);
  let button = createButton('Connect');
  button.position(30, 300);
  button.size(200, 50);
  button.mousePressed(checkPassword);
}

function draw() {
  // put drawing code here
}

function checkPassword() {
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