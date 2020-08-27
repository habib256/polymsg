
var socket = io.connect('ws://localhost:3000');

let titre;

function setup() {
  titre = createElement('h1', 'PolyMsg');
  titre.position (10, 3);
}

function draw() {
  // put drawing code here
}