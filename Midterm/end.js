let yV;
let wordV;
let pHit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(0);
   yV = height-1;
   wordV = height + width/8;

}

function draw() {
  stroke('#e0ca96')
  fill('#e0ca96')
   rect(0, yV,width, height)


  yV--;
  if (yV <= (height - height/4) && wordV >=height/2) {
    wordV--;
  }

  textFont('Times New Roman')
  textAlign(CENTER)
  fill('#4d2b05')
  textSize(width/8)
  text("The End", width/2,wordV)
  if (yV == height) {
    pHit = true;
  }
  if (pHit) {
    //window.location.href = 'page1.html'
  }
}