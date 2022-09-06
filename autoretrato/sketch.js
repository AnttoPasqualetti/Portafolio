let x = 100;
let y = 80;
let eyeX1 = 200;
let eyeX2 = 250;
let eyeY = 150;
let mouthY = 300;
let d = 0;
let mw = 10;
let brow = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  //cabello
  noStroke()
  fill(150,71,39)
  beginShape()
  vertex(199, 20) 
vertex(103, 53) 
vertex(47, 118) 
vertex(64, 163) 
vertex(14, 203) 
vertex(41, 249) 
vertex(14, 280) 
vertex(43, 314) 
vertex(15, 345) 
vertex(45, 370) 
vertex(18, 402) 
vertex(56, 429) 
vertex(37, 457) 
vertex(75, 481) 
vertex(335, 467) 
vertex(378, 417) 
vertex(336, 388) 
vertex(368, 353) 
vertex(335, 329) 
vertex(367, 300) 
vertex(340, 277) 
vertex(367, 237) 
vertex(346, 207) 
vertex(364, 181) 
vertex(327, 143) 
vertex(358, 112) 
vertex(333, 92) 
vertex(335, 62) 
vertex(297, 46) 
  endShape()
  
 
  
  //cara
  noStroke()
  fill(237,170,124)
  ellipse(200,200,250,300)
  
   //flequillo
  noStroke()
  fill(150,71,39)
  beginShape()
  vertex(212, 52) 
vertex(226, 68) 
vertex(243, 76) 
vertex(264, 83) 
vertex(291, 86) 
vertex(296, 61) 
vertex(268, 46) 
vertex(216, 29) 
vertex(186, 32) 
vertex(146, 46) 
vertex(111, 61) 
vertex(107, 87) 
vertex(130, 86) 
vertex(162, 80) 
vertex(193, 72) 
vertex(215, 69) 
vertex(228, 58) 
  endShape()
  
   //cuello
  noStroke()
  fill(237,170,124)
  beginShape();
  vertex(170, 345) 
  vertex(173, 406) 
  vertex(229, 406) 
  vertex(225, 345)
  endShape()
  
  //brazos
  noStroke()
  fill(237,170,124)
  beginShape();
  vertex(94, 475) 
vertex(69, 576) 
vertex(328, 576) 
vertex(298, 475)
  endShape()
  
  //cuerpo
  noStroke()
  fill(4,272,248)
  beginShape()
  vertex(174, 388) 
vertex(199, 402) 
vertex(226, 388) 
vertex(288, 388) 
vertex(332, 466) 
vertex(264, 488) 
vertex(287, 582) 
vertex(111, 582) 
vertex(133, 488) 
vertex(75, 465) 
vertex(114, 388) 
vertex(173, 387) 
  endShape()
 
  
  
   //eyes
  fill(78,36,5);
  stroke(255);
  strokeWeight(5);
  ellipse(eyeX1, eyeY, 30);
  ellipse(eyeX1 + 100, eyeY, 30);
  
   noFill();
  stroke(77,35,5);
  bezier(120, 100, 140, brow, 160, brow, 180, 100);
  bezier(220, 100, 240, brow, 260, brow, 280, 100);
  if (mouseY < 150) {
    brow = 90;
  } else {
    brow = 100;
  }

  if (mouseX > 120 && mouseX < 180) {
    eyeX1 = mouseX;
  } else {
    eyeX1 = eyeX1;
  }

  if (mouseY < 200 && mouseY > 150) {
    eyeY = mouseY;
  } else {
    eyeY = eyeY;
  }

  //nariz
   fill(237,170,124);
  stroke(206,141,63)
  strokeWeight(3)
  beginShape(TRIANGLES);
vertex(198, 225);
vertex(211, 255);
vertex(188, 255);
  endShape();
  
  //Labios
  fill (255,0,75);
  noStroke();
  beginShape()
vertex(189, 280) 
vertex(199, 287) 
vertex(209, 277) 
vertex(226, 289) 
vertex(217, 299) 
vertex(183, 299) 
vertex(167, 286)
  endShape()
  //ellipse(196,288,80,8); 
  
  //orejas izquierda
  fill(237,170,124)
  beginShape();
  curveVertex(320, 203) 
  curveVertex(325, 211)
  curveVertex(342, 216)
  curveVertex(351, 230) 
  curveVertex(352, 243) 
  curveVertex(344, 248) 
  curveVertex(333, 250) 
  curveVertex(324, 250) 
  curveVertex(320, 247) 
  endShape();
  
  //oreja derecha
  beginShape();
  curveVertex(100, 203) 
  curveVertex(61, 211) 
  curveVertex(52, 216) 
  curveVertex(49, 230) 
  curveVertex(49, 243) 
  curveVertex(54, 248) 
  curveVertex(64, 250) 
  curveVertex(74, 250) 
  curveVertex(100, 248) 
  endShape()
  
}

function mousePressed(){
  print("vertex(" + mouseX + ", " + mouseY + ")");}
