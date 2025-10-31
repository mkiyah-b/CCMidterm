let rows = 3, cols = 3;
let player = [], rand = [];
let index = 0;
let win = false;
let compWin = false;
let oneTurn = true;
let goodRun = false;
let counter = 0;
let link;

function setup() {
  createCanvas(400, 500);
  let button = createButton('RESET');
  button.position(10, 445);

  button.mousePressed(reset);
  for(let x=0; x < cols; x++) {
    for (let y=0; y < rows; y++) {
      player[index] = 0
      rand[index] = 0
      index++
    }
  }
  link = select('#homeClickLink');
  link.position(width/2, 465)
  //link.display(none)

}

function draw() {
  background(220);
  fill(0)
  let index = 0;
  for(let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      fill(255)
      
      if (mouseX > x*width/cols && mouseX < (x+1)*width/cols && mouseY > y*(height-100)/rows && mouseY < (y+1)*(height-100)/rows && mouseIsPressed == true && player[index] != 1 && rand[index] != 1) {
        goodRun = true
        //mousePressed()
        player[index] = 1
        print('green', index)
        let testing = chooseRand()
        rand[testing] = 1
        print(testing)
        counter++
      }
      
      if (player[index] == 1) {
        fill(120,250,50)
      }
      if (rand[index] == 1) {
        fill(45,150,255)
      }
      //translate(0.5*width/cols, 0.5*height/rows)
      
      
      rect(x*width/cols, y*(height-100)/rows, width/cols, (height-100)/rows)
      //ellipse(x*width/cols, y*(height-100)/rows, 100)
      //rect((x*width/cols) + 10, (y*(height-100)/rows) +10, (width/cols)-20, ((height-100)/rows)-20)
      // ellipse((x*width/cols)*1.5, (y*(height-100)/rows) *1.5, 20)
      
      // Rules
      if ((player[0] == 1 && player[1] == 1 && player[2] == 1) ||
         (player[0] == 1 && player[3] == 1 && player[6] == 1) ||
         (player[0] == 1 && player[4] == 1 && player[8] == 1) ||
         (player[1] == 1 && player[4] == 1 && player[7] == 1) ||
         (player[2] == 1 && player[5] == 1 && player[8] == 1) ||
        (player[6] == 1 && player[4] == 1 && player[2] == 1) ||
         (player[3] == 1 && player[4] == 1 && player[5] == 1) ||
         (player[6] == 1 && player[7] == 1 && player[8] == 1)) {
        win = true
      }
      else if ((rand[0] == 1 && rand[1] == 1 && rand[2] == 1) ||
         (rand[0] == 1 && rand[3] == 1 && rand[6] == 1) ||
         (rand[0] == 1 && rand[4] == 1 && rand[8] == 1) ||
         (rand[1] == 1 && rand[4] == 1 && rand[7] == 1) ||
         (rand[2] == 1 && rand[5] == 1 && rand[8] == 1) ||
        (rand[6] == 1 && rand[4] == 1 && rand[2] == 1) ||
         (rand[3] == 1 && rand[4] == 1 && rand[5] == 1) ||
         (rand[6] == 1 && rand[7] == 1 && rand[8] == 1) && !win) {
        compWin = true
      }
      index++;
    }
  }
  if (win && !compWin) {
    fill(0)
    textAlign(CENTER)
  text('You Win!', width/2, 450)
  //link.textAlign(CENTER)
  link.style('color: black')
  link.style('display: inline-block')

  }
  else if (compWin) {
    fill(0)
    textAlign(CENTER)
  text('You Lose!', width/2, 450)
  }
}

function reset() {
  index = 0
  for(let x=0; x < cols; x++) {
    for (let y=0; y < rows; y++) {
      player[index] = 0
      rand[index] = 0
      index++
    }
  }
  oneTurn = true
  win = false
}

function chooseRand() {
  let compChoose = 0;
  for(let x = 0; x < (rows*cols); x++) {
    compChoose = int(random(rows*cols))
    if (player[compChoose] == 1 || rand[compChoose] == 1) {
      compChoose = int(random(rows*cols))
    }
    else {
      break;
    }
  }
  return compChoose;
}