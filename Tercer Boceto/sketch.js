function setup() {
  createCanvas(500, 500, SVG);
  noStroke();
  colorMode(HSB)
}

//definicion constantes
radius = Math.sqrt(0.5);
dotSize = 0.05;
PHI = (1 + Math.sqrt(5)) / 2;
let hue = 0

//funcion girasol
function draw() {
  scale(width, height);
  background(0);

  frameCount = (mouseX, mouseY);
  for (let i = 1; i < frameCount; i++) {
    f = i / frameCount;
    angle = i * PHI;
    dist = f * radius;

    x = 0.5 + cos(angle * TWO_PI) * dist;
    y = 0.5 + sin(angle * TWO_PI) * dist;
    r = f * dotSize;
    circle(x, y, r);

  //ciclo de color
    fill(hue, 255, 255);
    hue = hue + 0.1;// si se cambia se tarda menos o mas el color
    if (hue > 255) {
      hue = 0;
    }
    
  }
  
  
}


function keyTyped(){
  if(key === 's'){
    save("lamina", SVG);
    print("listeilor");
  }

}
