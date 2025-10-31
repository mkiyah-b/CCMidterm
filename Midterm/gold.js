let counter = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 183, 15);
  angleMode(DEGREES)
  ellipseMode(CENTER)
}

function draw() {
  fill('#f0c816')
  ellipse(width/2,height/2,50)
  for(let i=0; i<=180; i++){
      fill(100+i,100+i,0)
      push()
      translate(width/2,height/2);
      rotate(i*counter*(-0.08));
      ellipse(i,i,10);
      pop()
  }
  for(let x=0; x<=360; x++){
      fill(100+x+x,100+x,0)
      push()
      translate(width/2,height/2);
      rotate(x*counter*0.2);
      ellipse(x,x,5);
      pop()
  }
  for(let y=0; y<=180; y++){
      fill(100+y+y,100+y,0)
      push()
      translate(width/2,height/2);
      rotate(y*counter*0.05);
      ellipse(y,y,10);
      pop()
  }
  // for(let i=0; i<25; i++) {
  //   rotate(i*counter);
  //   ellipse(i*width/2,i*height/2,5)
  // }
  
  counter++
  filter(DILATE)
  //filter(ERODE)
}