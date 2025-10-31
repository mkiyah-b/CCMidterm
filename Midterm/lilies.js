let tries = 3;
let pHit = false;
let shineCount = 0;
let shineMax = 500;
let adminPass = [0,2,1]
let admin = true;
let col;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let flag1 = false;
let flag2 = false;
let flag3 = false;
let correct = true;
let link;

let index = 0;
let rippleNum = 10;
let rippleQuick = 5;
let password = [];
let tempPass = []
let otherLiliesX = [];
let otherLiliesY = [];
let otherLiliesW = [];
let sunlight = ['#cee9eb', '#fdffed', '#e8e687', '#ffd666']

let firstX;
let firstY;
let firstW = 120;
let firstH = 110;
let firstRad = firstW/2;
    
let secondX;
let secondY;
let secondW = 50;
let secondH = 40;
let secondRad = secondW/2;
    
let thirdX;
let thirdY;
let thirdW = 165;
let thirdH = 160;
let thirdRad = thirdW/2;
let img, img2, img3;
let osc;

function preload() {
    img = loadImage('image0.png');
    img2 = loadImage('image1.png');
    img3 = loadImage('image2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(110, 120, 220);
  for(let x = 0; x < 3; x++) {
    if (!admin) {
      password[x] = floor(random(0,3))
    }    
    else {
        password[x] = adminPass[x]
    }
    tempPass[x] = 3;
  }
  print(password)
  
  firstX = width/2 - width/3;
  firstY = height/2 - height/2.5;
  secondX = width/2;
  secondY = height/2;
  thirdX = width/2 + width/4;
  thirdY = height/2 + height/5.5;
  
  for(let i=0; i < 45; i++) {
    //fill(20,150,20)
    otherLiliesX[i] = random(width);
    otherLiliesY[i] = random(height);
    otherLiliesW[i] = random(30);
  }
  
  osc = new p5.Oscillator('sine')
  link = select("#nextLink");
  link.style('display: none')
  //print(link)
}

function draw() {

  if (shineCount < shineMax) {
    stroke(color(sunlight[floor(random(4))]))
    fill(color(sunlight[floor(random(4))]))
    ellipse(random(width), random(height), random(3))
    shineCount++
  }
  
  if ((sqrt(sq(firstX - mouseX) + sq(firstY - mouseY)) <= firstRad) && mouseIsPressed) {
      flag1 = true;
      }
  
  if (flag1) {
    if (counter1 < rippleNum) {
      if (counter1 == 0) {
        keepPass(0)
        playOscillator(1)
      }
      counter1+=0.02;
      fill(200, 210, 255)
      stroke(50+(counter1*15),105+(counter1*15),150+(counter1*15))
      strokeWeight(15-(counter1*1.5))
      ellipse(firstX, firstY, firstW*(counter1+1), firstH*(counter1+1))
      stroke(110, 120, 220)
      fill(110, 120, 220)
    ellipse(firstX, firstY, firstW*(counter1*1.1), firstH*(counter1*1.1))
    }
    else {
      stroke(110,120,220)
      fill(110,120,220)
      ellipse(firstX, firstY, firstW*(counter1+1), firstH*(counter1+1))
      flag1 = false
      counter1 = 0
      shineCount = 0;
    }
  }  
  
  
  if ((sqrt(sq(thirdX - mouseX) + sq(thirdY - mouseY)) <= thirdRad) && mouseIsPressed) {
      flag3 = true;
      }
  
  if (flag3) {
    if (counter3 < rippleQuick) {
      if (counter3 == 0) {
        keepPass(2)
        playOscillator(3)
      }
      counter3+=0.01;
      fill(200, 210, 255)
      stroke(50+(counter3*18),125+(counter3*18),150+(counter3*18))
      strokeWeight(15-(counter3*1.3))
      ellipse(thirdX, thirdY, thirdW*(counter3+1), thirdH*(counter3+1))
      stroke(110, 120, 220)
      fill(110, 120, 220)
    ellipse(thirdX, thirdY, thirdW*(counter3*1.2), thirdH*(counter3*1.2))
      
    }
    else {
      stroke(110,120,225)
      strokeWeight(15-(counter3*1.2))
      fill(110,120,220)
      ellipse(thirdX, thirdY, thirdW*(counter3+1), thirdH*(counter3+1))
      flag3 = false
      counter3 = 0
      shineCount = 0;
    }
  }
  
  if ((sqrt(sq(secondX - mouseX) + sq(secondY - mouseY)) <= secondRad) && mouseIsPressed) {
      flag2 = true;
      }
  
  if (flag2) {
    if (counter2 < rippleNum) {
        if (counter2 == 0) {
        keepPass(1)
        playOscillator(2)
      }
      
      counter2 +=0.04;
      
      
      fill(200, 210, 255)
      stroke(20+(counter2*20),85+(counter2*20),80+(counter2*20))
      strokeWeight(15-(counter2*1.1))
      ellipse(secondX, secondY, secondW*(counter2+1), secondH*(counter2+1))
      stroke(110, 120, 220)
      fill(110, 120, 220)
    ellipse(secondX, secondY, secondW*(counter2*1.09), secondH*(counter2*1.09))
    }
    
    else {
      stroke(110, 120, 220)
      strokeWeight(4)
      fill(110, 120, 220)
      ellipse(secondX, secondY, secondW*(counter2+1), secondH*(counter2+1))
      flag2 = false
      counter2 = 0
      shineCount = 0;
    }
  }
  
  for(let h=0; h<45; h++) {
    stroke(20,50,20)
    strokeWeight(2)
    fill(20,150,20)
    ellipse(otherLiliesX[h], otherLiliesY[h], otherLiliesW[h]);
  }
  
  image(img2, width/1.25, height/10, 300, 300)
  image(img3, width/10, height/1.5, 300,300)

  //Lily pads
  stroke(25,100,25)
  strokeWeight(2)
  // stroke(200,210,255)
  fill(100,210,0)
  ellipse(firstX, firstY, firstW, firstH)
  ellipse(secondX, secondY, secondW, secondH)
  ellipse(thirdX, thirdY, thirdW, thirdH)
  
  stroke(50,150,50)
  line(firstX,firstY,firstX+firstRad, firstY+8)
  line(firstX,firstY,firstX+firstRad-20, firstY+firstRad-20)
  line(firstX,firstY,firstX-firstRad+20, firstY-firstRad+ 20)
  line(firstX,firstY,firstX-firstRad+35, firstY-firstRad+ 10)
  line((firstX + (firstX-firstRad+20))/2, (firstY + (firstY - firstRad+20))/2, firstX-firstRad +15, firstY - 35)
  
  line(secondX, secondY, secondX+secondRad-2, secondY+5)
  line(secondX, secondY, secondX, secondY+secondRad-6)
  
  line(thirdX, thirdY, thirdX-thirdRad+2, thirdY)
  line(thirdX, thirdY, thirdX-thirdRad+5, thirdY-20)
  line(thirdX, thirdY, thirdX+thirdRad-20, thirdY+50)
  line(thirdX, thirdY, thirdX+10, thirdY+thirdRad)

  // Flowers
  stroke(125,100,25)
  fill(255,160,170)
  ellipse(firstX,firstY-5,20)
  ellipse(firstX-10,firstY+5,20)
  ellipse(firstX+10,firstY+5,20)
  
  ellipse(secondX+2,secondY-2.5,10)
  ellipse(secondX-5,secondY+4,10)
  ellipse(secondX+5,secondY+7,10)
  
  ellipse(thirdX+5,thirdY-15,30)
  ellipse(thirdX-20,thirdY+5,33)
  ellipse(thirdX+10,thirdY+15,35)
  
  if (correct && index == 3 && counter1 == 0 && counter2 == 0 && counter3 == 0 && tries != 0) {
    textSize(100)
    textAlign(CENTER)
    text('CORRECT', width/2, height/2)
    link.position(width/2, height/1.8)
    link.style('display: inline-block')
    link.style('text-align: center')
    link.style('color: white')

  }
  else if (tries == 0) {
    textSize(100)
    textAlign(CENTER)
    text('Out of Turns', width/2, height/2)
    textSize(20)
    text('REFRESH', width/2, height/2+50)
  }

  fill(110, 120, 220)
  stroke(110, 120, 220)
  rectMode(CENTER)
  rect(width/1.05, height/20, 30, 35)

  fill(255,255,255)
  textSize(30)
    textAlign(CENTER)
    text(tries, width/1.05, height/15)
}

function keepPass(nextKey) {
  print(tempPass)
  if (index < 3) {
    tempPass[index] = nextKey;
      
    index++
  }
  if (index == 3) {
    for(let y =0; y < 3; y++) {
      if (tempPass[y] != password[y]) {
        correct = false;
        print('wrong!')
      }
    }
    
    if (!correct) {
      for(let x = 0; x < 3; x++) {
        tempPass[x] = 3
      }
      index = 0;
      correct = true
      if (tries != 0) {
        tries--
      }
    }
    else {
      print('correct!')
    }
  } 
  //filter(ERODE)
}

function playOscillator(lilyNum) {
  
  osc.amp(0.5);
  if (lilyNum == 1) {
    osc.start();
    osc.freq(196.00)
    //osc.freq(293.66);
    //osc.freq(329.63,0.5)
  }
  if (lilyNum == 2) {
    osc.start();
    osc.freq(220.00)
    //osc.freq(392.00);
    //osc.freq(392.00, 0.2);
    //osc.freq(440.00,0.5)
  }
  if (lilyNum == 3) {
    osc.start();
    osc.freq(246.94)
    //osc.freq(493.88);
    //osc.freq(523.25,0.5)
  }
  osc.amp(0,0.1,0.5)
}