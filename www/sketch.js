let datas = [];
let titre;
let temps = 240;
let content;
let counter;

function preload() {
  //loads in text file as lines of text
 // serverip = loadStrings('ip.txt');
  datas = loadJSON("http://"+serverip+":3000/data");
  
}

function setup() {
  counter = 0;
  
}

function draw() {
  //console.log(datas.length)
  if (frameCount % temps == 0) {
    counter = counter + 1;
    if (datas[counter] == undefined){
      counter =0;
    }
  }
  removeElements();
  // put drawing code here
  titre = createElement('h1', datas[counter].titre);
  titre.position(10, -20);
  content = createElement('h2', datas[counter].content);
  content.position(10, 80);
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