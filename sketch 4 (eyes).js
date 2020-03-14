
var titleCount = 20;
var r;
var g;
var b;

function setup() {
	frameRate(10);
  createCanvas(windowWidth, windowHeight);
  //noLoop();

}

function draw() {



	background(220);
	noStroke();
	r = 255;
	g = 100;
	b = 255;


for (var j = 0; j < titleCount; j++) {
	for (var i = 0; i < titleCount; i++) {
		var x = i * 80;
		var y = j * 80;

c = color(random(r), random(g), random (b));

fill(c);
//rect (x, y, 80, 80);
ellipse(x, y, 20, 20);
fill(255);
ellipse(x + 40, y + 40, 20, 20);
fill(0);
ellipse(x + 40, y + 40, 10, 10);





		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}