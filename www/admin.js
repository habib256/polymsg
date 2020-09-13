let datas;
let mode;
let password;
let logged = false;
let modifing = false;
let stop;
let paragraphs=[];
let buttons_modif=[];
let buttons_suppr=[];
let buttonNewMsg;
let txtInput;
let contentInput;
let buttonAppliquer;

function preload() {
  //loads in text file as lines of text
  //ip = loadStrings('ip.js);
  datas = loadJSON("http://" + serverip + ":3000/data");
}

function setup() {
  drawLog();
}

function draw() {
  // put drawing code here

}

function drawLog() {
  noCanvas();
  removeElements();
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

function drawList() { 
  removeElements();
  stop = false;
  buttonNewMsg = createButton('Ajouter un nouveau message');
  buttonNewMsg.mousePressed(newMessage);
  for (let i = 0; !stop; i++) {
    if (datas[i] == undefined) {
      stop = true;
    } else {
      paragraphs.push(createP(datas[i].titre + ":\t\t\t" + datas[i].content));
      buttons_modif.push(createButton('modifier'));
      buttons_suppr.push(createButton('supprimer'));
    }
  }
}

function drawModif() {    
  removeElements();
  txtInput = createInput('Text');
  txtInput.input(mytxtInputEvent);
  contentInput = createInput('Content');
  contentInput.input(mycontentInputEvent);
  buttonAppliquer = createButton('Appliquer');
  buttonAppliquer.input(myAppliquerEvent);
}


//Input Events
function myAppliquerEvent() {

}

function mytxtInputEvent(){
  console.log('you are typing: ', this.value());
  password = this.value();
}

function mycontentInputEvent(){
  console.log('you are typing: ', this.value());
  password = this.value();
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
  password = this.value();
  //console.log(this);
}

function newMessage() {
  console.log("Modifications !!");
  modifing = true;
  drawModif();
}

function checkPassword() {
  if (password == "password") {
    console.log("YES OK !!! YOURE THE BOOSS");
    logged = true;
    drawList();
  }
  // Always true :-)

  logged = true;
  drawList();
}

// Socketio Events
socket.on('connect', () => {
  if (socket.connected) {
    console.log("Socketio connected to server " + serverip + " Great !");
  }
});

socket.on('ping', ping);
async function ping() {
  console.log('Ping');
  socket.emit('pong', 'pong');
}
