function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(mouseX, mouseY, 100);
    for(let y = 15; y <= 400; y +=15){
        for(let x=40; x <= 250; x += 25 ){
        push();
        translate(x, y);
        let d = dist (x, y, mouseX, mouseY) / width;
        circle(x, y, -d*50);
        rotate(d)
          pop() //si se activa este los circulos quedan estaticos y solo aumenta o disminuye su tamaño
      }
    }
  }
    
    
  