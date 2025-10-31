let x = 40, y = 40;
let f = 0, z = 0;
let xV = 3, yV = 3;
let col, col1, col2, newCol;
let diameter = 10;
let i = 0.5;
let h;
let colorRange = ['#f5f1df', '#f7e0a6', '#d6d07a', '#ede02b', '#db7c00'];
let planA1, planA2, planetCol;
let link;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#0b042e');
  noStroke();
  
  a = random(30,500)
  b = random(30,500)
  col1 = color('#a1de64');
  col2 = color(9, 135, 85);
  speed = abs(xV) + abs(yV);
  col = color('#f7e0a6');
  colNew = color('#ede02b')
  planA1 = color('#86afb0');
  planA2 = color('#2f4178');
  link = select("#clickLink")
  link.position(width/1.1,height/1.1)
}

function draw() {
  for (let h = random(-width,width-10); h < width; h += 2) {
      fill(color(random(colorRange)));
      ellipse(h,f,random(0.1, 10.0));
      f+=random(1,3)
    }
  h = 0;
  f = 0;
  
  h = map(100,0,200,0,1);
  planetCol = lerpColor(planA1,planA2, h);
  fill(planetCol)
  ellipse(100,200,50);
  //link.position(100,200)
  
  fill(color(random(255), random(255), random(255)))
  ellipse(400,450,50);
  fill(color(random(255), random(255), random(255)))
  ellipse(360,480,20);
  
  fill(color('#86afb0'))
  ellipse(width-65,40,50);
  
  
  fill(col);
  ellipse(x,y,diameter);
  
  fill('#f5f1df');
  ellipse(random(width),random(height),random(0.1, 10.0));
    
  x+=xV;
  y+=yV;

  if(y > height - diameter/2 || y < diameter/2){
    yV = -yV;
    col = random(colorRange);
  }
  if (x < diameter/2 || x > width - diameter/2) {
    xV = -xV;
    col = random(colorRange)
  }
  filter(ERODE)
}

 function mousePressed() {
   xV = random(-10, 10);
   yV = random(-10, 10);
   
  col = color(random(255),random(255),random(255));
  col = color(random(255),random(255),random(255));
 }