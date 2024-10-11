// TODO: use map() to change shape's size

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);

}

function draw() {
  let rx=100;
  let ry=50;
  let rw=400;
  let rh=400;
  let rightDelay=200;
  let betweenRect=(mouseX>rx)&&(mouseX<rx+rh)
  rect(rx,ry,rw,rh);

  let cx=200;
  let cy=500;
  let cr=150;

  let disMouse=dist(mouseX,mouseY,cx,cy);

  push();
  if(disMouse<cr)
  {
    fill("deeppink")
  }
  if (disMouse>cr) {
    fill(255);
    
  }
}
