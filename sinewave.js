

var anglInc = 0.036;


function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {

background (255);

	anglInc += 0.0001;

var scale = 100;
var offset = 400.0;
//translate in the y axis 
var angle = 30;

var bruitC = 0.001;
var posC = noise(millis() * bruitC) * 40;

var bruitX = 0.0001;
var posX = noise(millis() * bruitX) * 50;



for(var x = 0; x <= width; x += posX){
	//apertura(espacio entre las cositas)

	var y = offset + (sin(angle) * scale);
	noFill();
	stroke(255, 0, random(199))
	ellipse(x, y, posC, posC);
	
	y = offset + (tan(angle) * scale);
	stroke(255, 0, 199)
	rectMode(CENTER);
	rect(x, y, random(posC), posC)

	angle += anglInc;


}
sin()
cos()


}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}