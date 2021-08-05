let hr, mn, sc;
let hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,800);

  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(0, 0, 0);  

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  stroke(255, 0, 0);
  strokeWeight(7);
  translate(400, 400);
  rotate(scAngle - 108);
  line(0, 0, 265, 100);
  pop();

  push();
  stroke(0, 255, 0);
  strokeWeight(7);
  translate(400, 400);
  rotate(hrAngle-108);
  line(0, 0, 220, 100);
  pop();

  push();
  stroke(0, 0, 255);
  strokeWeight(7);
  translate(400, 400);
  rotate(mnAngle-108);
  line(0, 0, 300, 100);
  pop();

  noFill();
  stroke(255, 0, 0);
  strokeWeight(7);
  arc(400, 400, 750, 750, 270, scAngle -90)
  stroke(0, 0, 255);
  arc(400, 400, 730, 730, 270, mnAngle -90)
  stroke(0, 255, 0);
  arc(400, 400, 710, 710, 270, hrAngle -90)
  console.log(scAngle)
  drawSprites();
}