
// SKETCH 7 
//click the canvas to activate microphone
//canvas is streatched on purpose 
//star reacts to noise!

let video;
let mic;
let star;
let soundLevel = 0;
let starSize = 50;

function preload() {
  star = loadImage('star5.png');
}

function setup() {
  createCanvas(600, 600);

  // WEBCAM
  video = createCapture(VIDEO);
  video.size(600, 600);
  video.hide();

  // MICROPHONE
  mic = new p5.AudioIn();
}

function setup() {
  createCanvas(600, 600);

  // webcam 
  video = createCapture(VIDEO);
  video.size(600, 600);
  video.hide();

  // Microphone
  mic = new p5.AudioIn();
}

function draw() {
  // Show webcam
  image(video, 0, 0, 600, 600);
  filter(GRAY);

  soundLevel = mic.getLevel();

  // star reaction to sound
  starSize = 70 + soundLevel * 7000;

  // star centering
  image(
    star,
    width / 2 - starSize / 2,
    height / 2 - starSize / 2,
    starSize,
    starSize
  );
}

// mouse press function for mouse toggle
function mousePressed() {
  mic.start();
}
