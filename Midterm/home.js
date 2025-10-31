let yV = 0;
let wordV;
let pHit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(0);
   wordV = -width/20;
}

function draw() {
  stroke('#e0ca96')
  fill('#e0ca96')
   rect(0,0,width,yV)
  if (yV < height) {
    yV++;
  }
  if (yV >= height/4 && wordV <=height/2) {
    wordV++;
  }
  textFont('Times New Roman')
  textAlign(CENTER)
  fill('#4d2b05')
  textSize(width/10)
  text("Once Upon a Time...", width/2,wordV)
  if (yV == height) {
    window.location.href = 'page1.html'
  }
}

