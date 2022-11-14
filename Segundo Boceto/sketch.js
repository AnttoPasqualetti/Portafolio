let R, G, B;
let number;

function setup() {
  
  createCanvas(500, 500);
  noStroke();
  R = createSlider (0, 255, 255, 1);
  G = createSlider (0, 255, 0, 1);
  B = createSlider (0, 255, 0, 1);;
  number = createSlider (0, 1000, 1)

}

 radius = Math.sqrt(0.5);
 dotSize = 0.05;
 PHI = (1 + Math.sqrt(5)) / 2;

function draw() {
  scale(width, height);
  background(0);
  fill(1);

     frameCount = number.value();
  for (let i = 1; i < frameCount; i++) {
    
     f = i / frameCount;
     angle = i * PHI;
     dist = f * radius;

     x = 0.5 + cos(angle * TWO_PI) * dist;
     y = 0.5 + sin(angle * TWO_PI) * dist;
     r = f * dotSize;
    
     clr = color(R.value(), G.value(), B.value());
    fill(clr);
    
    circle(x, y, r);
     
    
  }  

}
