
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw() {

	var tamango = random(20);
	stroke(random(255), 255, 0);
	ellipse(mouseX, mouseY, tamango, tamango);

	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}