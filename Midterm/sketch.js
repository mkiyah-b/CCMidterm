class worm {
  constructor() {
    this.xVal = []
    this.yVal = []
    this.numSegments = floor(random(50,200));
    for(let i=0; i < this.numSegments; i++) {
      this.xVal[i] = mouseX;
      this.yVal[i] = mouseY;
    }
    this.counter = 0;
    this.offset = random(1,100);
    this.speed = random(0.005, 0.01)
    this.col1 = color(random(255),random(255),random(255))
    this.col2 = color(random(255),random(255),random(255))
    this.diameter = random(50,150)
  }
  
  move(){
    this.xVal[this.numSegments -1] = noise(this.counter) * width
  this.yVal[this.numSegments -1] = noise(this.counter+this.offset) * height
    this.counter+=this.speed;
  }
  
  display(){
    for(let i=0; i < this.numSegments - 1; i++) {
      this.xVal[i] = this.xVal[i+1]
      this.yVal[i] = this.yVal[i+1]

      let l = sin(map(i,0,this.numSegments,0,PI))
      let col = lerpColor(this.col1, this.col2, l)
      let invertedCol = lerpColor(this.col2, this.col1, l)
      let d = sin(map(i, 0,this.numSegments, 0,PI))
      stroke(col)
        fill(0)
        ellipse(this.xVal[i], this.yVal[i], this.diameter*d)
    }
   
  }
}


let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  //print(xVal);
}

function draw() {
  background(0);
  for(let x=0;x<worms.length;x++){
    worms[x].move()
    worms[x].display()
  }
}

let worms = []
function mousePressed(){
  worms.push(new worm())
}