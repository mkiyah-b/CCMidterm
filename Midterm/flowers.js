let f = []; //array of flowers
class flower {
  constructor(x,y){
    this.x = x
    this.y = y
    this.rotations = 0;
    this.petalNum = int(random(3,20));
    this.centerDiameter = random(25,100)
    this.petalLength = random(80,150)
    this.petalWidth = random(20,80)
    this.petalCol = color(random(255),random(255),random(255))
    this.centerCol = color(random(255),random(255),random(255))
    this.xV = random(-4,4)
    this.yV = random(-4,4)
    this.rV = random(-4,4) 
  }
  
  display() {
    push()
    translate(this.x,this.y)
    rotate(this.rotations)
  
    for(let i=0; i<this.petalNum; i++) {
      fill(this.petalCol)
      ellipse(50,0,this.petalLength,this.petalWidth)
      rotate(360/this.petalNum)
    }
    fill(this.centerCol)
    ellipse(0,0,this.centerDiameter)
    pop()
  }
  
  move(){
    this.x+=this.xV
    this.y+=this.yV
    this.rotations+=this.rV
    
    if(this.x < -this.petalLength){
      this.x = width + this.petalLength;
    }
    if(this.x > width + this.petalLength){
      this.x = -this.petalLength;
    }
    if(this.y < -this.petalLength){
      this.y = height + this.petalLength;
    }
    if(this.y > height + this.petalLength){
      this.y = -this.petalLength;
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  
}

function draw() {
  
  background(200,250,200);
  for(let i=0;i<f.length;i++){
    f[i].display();
    f[i].move()
  }
}

function mouseDragged() {
  f.push(new flower(mouseX, mouseY));
}

function mousePressed() {
  f.push(new flower(mouseX, mouseY));
  //print(f);
}