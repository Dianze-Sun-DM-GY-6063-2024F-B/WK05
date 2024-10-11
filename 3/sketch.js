// TODO: animation across the screen
//       wrap around
//       bounce
let x;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
x=0
}

function draw() {
  background(20);
  ellipse(10*frameCount%width, height/2, 100);

}
