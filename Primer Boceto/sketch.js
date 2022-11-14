function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 1);
  noStroke();
}

 radius = Math.sqrt(0.5);
 dotSize = 0.05;
 PHI = (1 + Math.sqrt(5)) / 2;

function draw() {
  scale(width, height);
  background(0);
  fill(1);

  frameCount = 500;
  for (let i = 1; i < frameCount; i++) {
     f = i / frameCount;
     angle = i * PHI;
     dist = f * radius;

     x = 0.5 + cos(angle * TWO_PI) * dist;
     y = 0.5 + sin(angle * TWO_PI) * dist;

     r = f * dotSize;

    circle(x, y, r);
  }
}
