let s = [];
let scarfCol;
let stripeCol;
let stripeCount = 5;
let lightNum = 10;
let lightCol;
let link;

class snowFlake {
  constructor(x,y){
    this.snowColor = color(random(225,255),random(225,255),random(225,255))
    this.weight = random(0.5,3)
    this.x = x
    this.y = y
    this.rotations = 0;
    this.stemNum = floor(random(5,15));
    this.stemLength = random(8,60)
    this.branchX = random(1,this.stemLength -5)
    this.branchY = random(1,20)
    this.branch1X = random(this.branchX,this.stemLength/2)
    this.branch1Y = random(1,10)
    this.branch1Space = random(0.1,0.5)
    this.branchSpace = random(0.6,0.8)
    this.xV = random(-5,5)
    this.yV = random(-5,5)
    this.rV = random(-5,4)
  }
  
  display() {
    push()
    translate(this.x, this.y)
    rotate(this.rotations)
    
    for(let i=0; i<this.stemNum; i++) {
      stroke(this.snowColor)
      strokeWeight(this.weight)
      line(0,-this.stemLength,0,this.stemLength)
      
      line(-(this.stemLength - this.branchX),-(this.stemLength+this.branchY),0,-(this.stemLength*this.branchSpace))
      line((this.stemLength - this.branchX),-(this.stemLength+this.branchY),0,-(this.stemLength*this.branchSpace))
      line(-(this.stemLength - this.branch1X),-(this.stemLength+this.branch1Y),0,-(this.stemLength*this.branch1Space))
      line((this.stemLength - this.branch1X),-(this.stemLength+this.branch1Y),0,-(this.stemLength*this.branch1Space))
      rotate(360/this.stemNum)
    }
    pop()
  }
  
  move() {
    this.x+=this.xV
    this.y+=this.yV
    this.rotations+=this.rV
    
    if (this.x < -(this.stemLength+this.branchY)) {
      this.x = width + this.stemLength+this.branchY;
    }
    if (this.x > width + (this.stemLength+this.branchY)) {
      this.x =  -(this.stemLength+this.branchY);
    }
    if (this.y < -(this.stemLength+this.branchY)) {
      this.y = height + this.stemLength+this.branchY;
    }
    if (this.y > height + (this.stemLength+this.branchY)) {
      this.y =  -(this.stemLength+this.branchY);
    }
    
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  scarfCol = color(255,0,0);
  stripeCol = color(0,255,0);
  lightCol = color(random(255),random(255),random(255))
  link = select("#clinkLink");
  link.position(width/1.2, height/25)
}

function draw() {
  background(150,200,255);
  
  tree()
  
  //snow
  for (let x=0;x<5;x++){
    fill(225,220,250)
    stroke(255)
    ellipse(random(width),random(height),8)
  }
  
  //ground
  stroke(255)
  fill(255)
  ellipse(0,height-10,200, 120)
  ellipse(width/2, height-10,100)
  ellipse(width/2+35, height-30,100)
  rect(0,height-50,width,height)
  
  snowMan()
  
  for(let x=0;x<s.length;x++) {
    s[x].display();
    s[x].move()
  }
}

function mousePressed() {
  s.push(new snowFlake(mouseX, mouseY));
  scarfCol = color(random(255), random(255), random(255))
  stripeCol = color(random(255), random(255), random(255))
  stripeCount = floor(random(5,25))
  lightCol = color(random(255), random(255), random(255))
}

function tree() {
  stroke(0)
  fill(10,150,50)
  triangle(width/2-width/4,height-50,width/2,height-400,width/2+width/4,height-50)
  triangle(width/2-width/5,height-150,width/2,height-450,width/2+width/5,height-150)
  triangle(width/2-width/6,height-250,width/2,height-500,width/2+width/6,height-250)
  
  
  fill(lightCol)
  
  ellipse(width/2-40,height/2+height/4,20)
  ellipse(width/2+50,height/2-60+height/4,20)
  ellipse(width/2-10,height/2+200+height/4,20)
  ellipse(width/2+100,height/2+120+height/4,20)
  ellipse(width/2-85,height/2+80+height/4,20)
  ellipse(width/2-5,height/2-120+height/4,20)

  fill(255,240,0)
  ellipse(width/2,height-500, 50)
}

function snowMan() {
  stroke(255)
  fill(255)
  ellipse(width-90,height-80,100)
  ellipse(width-90,height-150,70)
  ellipse(width-90,height-200,50)
  for(let y=0;y<3;y++) {
    fill(0)
    ellipse(width-90,height-110-(y*25),15)
  }
  for(let i=0;i<2;i++){
    fill(0)
    ellipse(width-80-(i*20),height-210,10)
  }
  fill(250,150,10)
  triangle(width-110,height-198, width-85,height-203, width-82, height-190)
  stroke(0)
  fill(0)
  rect(width-120,height-230,60,10)
  rect(width-115,height-230,50,-30)
  for(let j=0; j<stripeCount; j++) {
    if (j % 2 == 0) {
      fill(scarfCol)
    }
    else {
      fill(stripeCol)
    }
    rect((width-120)+(j*(60/stripeCount)), height-185,60/stripeCount,10)
  }
  for(let k=0; k<stripeCount; k++) {
    if (k % 2 == 0) {
      fill(scarfCol)
    }
    else {
      fill(stripeCol)
    }
    rect(width-75,(height-185)+(k*(50/stripeCount)), 10, 50/stripeCount)
  }
}