
var inc = 0.02;
//increment of velocity 
var density = 39; 
//size of the rectangle
var znoise = 0.09;

function setup(){
	createCanvas(windowWidth, windowHeight);
	//noStroke();


}

function draw() {
	var xnoise = 0.0;
	var ynoise = 0.0;

for (var y = 0; y < height; y += density){

for(var x = 0; x < width; x += density){

var n = noise(xnoise, ynoise, znoise) * 256;
		fill(n, 100, n);
		rect(x, y, density, density);

		xnoise += inc;

}
xnoise = 0;
ynoise += inc;


}
znoise += inc;

}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}