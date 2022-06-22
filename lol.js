var angle = 0
var slider;
function setup() {
  slider = createSlider(0,TWO_PI,PI/4 , 0.01)
  canvas = createCanvas(400, 400);
  canvas.position(480,100);
  slider.position(610,530);
}

function draw(){
  background(51);
  angle = slider.value();
  stroke(225);
  translate(200, height);
  branch(130);
}

function branch(len) {
  line(0,0,0,-len);
  translate(0,-len);
  if (len>4) {
    push();
    rotate(angle);
    branch(len*0.67);
    pop();
    push();
    rotate(-angle);
    branch(len*0.67);
    pop();
  }
}