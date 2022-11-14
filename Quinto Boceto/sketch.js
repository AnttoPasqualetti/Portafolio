cSize = 1000 //tamaño canvas
function setup() {
  createCanvas(cSize, cSize, SVG);
  colorMode(HSB); //modo de color para efecto
  noStroke();
}

//definicion constantes
radius = Math.sqrt(0.5);
dotSize = 0.05;
PHI = (1 + Math.sqrt(5)) / 2;
e=2.71

//inicialización variables
let hue = 0
mx = cSize/2
my = cSize/2
tick = -1//esta es cualquier palabra para poder contar


//funcion girasol
function draw() {
  scale(width, height);
  background(0);
  
  tick = tick+1
  if (tick>=100){
    tick=300
  }
  for (let i = 1; i < tick; i++) {
    f = 2 * i / (100-tick);
    angle = i * PHI;
    dis = f * radius;
    
    //calculo posición de cada punto centrado en posición del mouse
    x = 0.5 + cos(angle * TWO_PI) * dis+mx/cSize-0.5;
    y = 0.5 + sin(angle * TWO_PI) * dis+my/cSize-0.5;
    r = f * dotSize;
    
    circle(x, y, r);
    
    //ciclo de color
    fill(hue, 255, 255);
    hue = hue + 0.1;
    if (hue > 255) {
      hue = 0;
    }   
  }
}

//obtener posición mouse en cada click
function mousePressed() {
    mx=mouseX
    my=mouseY
    tick = -1
}

//Lamina de impresión
function keyTyped(){
  if(key === 's'){
    save("lamina", SVG);
     print("listeilor");
  }

} 
