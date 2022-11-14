let b = [];
let num = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(let i = 0; i < num; i++){
    let c = color(random(255), random(255), random(255));
    let temporalBoid = new Boid(random(width), random(height), c);
    b.push(temporalBoid);
  }
  
  
}

function draw() {

  for(let i = 0; i < b.length; i++){
    b[i].go();
    b[i].draw();
  }
}


 class Boid{
  constructor(x, y, col){
    this.x = x;
    this.y = y;
    this.col = col;
    this.angle = 0;
    this.l = 30;
    //this.seed = round(random(300));
  }
  

   go(){
     noiseSeed(this.seed);
     this.angle = (noise(frameCount/100) - 0.5) * PI;
     this.x += cos(this.angle) * 2;
     this.y += sin(this.angle) * 2;
     
    if(this.x > width){this.x -= width};
    if(this.x < 0){this.x += width};
    if(this.y > height){this.x -= height};
    if(this.y < 0){this.y += height};
   }
   
   
  draw(){
    fill(this.col);
   noStroke(0);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    beginShape();
    vertex(0, -1);
    vertex(this.l * 0.75, -1);
    vertex(this.l * 0.75, -this.l/8);
    vertex(this.l, 0);
    vertex(this.l * 0.75, this.l/8);
    vertex(this.l * 0.75, 1);
    vertex(0, 1);
    endShape();
    pop();
  }
}
