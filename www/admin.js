let datas;
let mode;
let password;
let logged = false;
let stop;

function preload() {
  //loads in text file as lines of text
  //ip = loadStrings('ip.js);
  datas = loadJSON("http://" + serverip + ":3000/data");
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
  if (logged) {
    removeElements();
    stop = false;
    for (let i = 0; !stop; i++) {
      if (datas[i] == undefined) {
        stop = true;
      } else {
        createP(datas[i].titre+ ":\t\t\t"+datas[i].content);
      }

    }
  }
}

//Input Events
function myInputEvent() {
  console.log('you are typing: ', this.value());
  password = this.value();
  //console.log(this);
}

function checkPassword() {
  if (password == "password") {
    console.log("YES OK !!! YOURE THE BOOSS");
    logged = true;
  }
  // Always true :-)

  logged = true;
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
