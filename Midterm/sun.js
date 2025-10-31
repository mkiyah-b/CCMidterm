let counter = 0;
let link;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#0d0f3d');
  angleMode(DEGREES)
  ellipseMode(CENTER)
  link = select('#spiral');
}

function draw() {
  fill('#f0c816')
  ellipse(width/2,height/2,50)
  link.position(width/2-17, height/2 - 10)
  //noStroke()
  for(let x=0; x<20; x++){
    for(let y=0; y<20; y++){
      fill(255-y-x,255-x-y,100)
      push();
      rotate(counter);
      ellipse(x*width/2,y*height/2,10);
      ellipse((x*width/2)*0.5,(y*height/2)*0.5,10);
      pop();
    }
  }
  
  for(let x=0; x<=180; x++){
      fill(100+x+x,100+x,0)
      push()
      translate(width/2,height/2);
      rotate(x*counter*0.05);
      ellipse(x,x,10);
      pop()
  }
  
  for(let i=0; i<20; i++){
    for(let j=0; j<20; j++){
      fill(255-j,255-i,100)
      //push();
      rotate(counter);
      ellipse(j,i,3);
      ellipse((j*width/2)*0.5,(i*height/2)*0.5,5);
      //pop();
    }
  }
  counter++
  //filter(ERODE)
}