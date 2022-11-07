function setup() {
  createCanvas(700, 700);
  n=createSlider(1,10,10,1)
}

function draw() {
  background(240,114,236);
  cruz(350, 350, 350, millis()/5000);
  stroke(3)
}

function cruz(x, y, tam, rot) {
  push();
  translate(x, y);
  rotate(rot);
  line(-tam / 2, 0, tam / 2, 0);
  line(0, -tam / 2, 0, tam / 2);
  if(tam > 20*n.value()){
    cruz(-tam / 2, 0, tam/2, rot + QUARTER_PI);
    cruz(tam / 2, 0, tam/2, rot + QUARTER_PI);
    cruz(0, -tam / 2, tam/2, rot + QUARTER_PI);
    cruz(0, tam/2,tam/2, rot + QUARTER_PI);
  }
  pop();
  
}
