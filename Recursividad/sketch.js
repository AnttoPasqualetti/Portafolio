function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 150);
  fill(255, 50);
}

function draw() {
  l= 1
  l2 = 1
  l3 = 1

 background(162,250,105);
 stroke(70,63,63);
 strokeWeight(3)
  cruz(width / 2, height / 2, 400, millis()/9999, l);
  
}

function cruz(x, y, tam, rot, niveles) {
  push();
  translate(x, y);
  rotate(rot);
  strokeWeight(tam/50);
  line(-tam / 2, 0, tam / 2, 0);
  line(0, -tam / 2, 0, tam / 2);
  if (niveles > 0) {
    cruz(-tam / 2, 0, tam*l3, rot + QUARTER_PI*l2, niveles - 1);
    cruz(tam / 2, 0, tam*l3, rot + QUARTER_PI*l2, niveles - 1);
    cruz(0, -tam / 2, tam*l3, rot + QUARTER_PI*l2, niveles - 1);
    cruz(0, tam / 2, tam*l3, rot + QUARTER_PI*l2, niveles - 1);
  }
  pop();
}
