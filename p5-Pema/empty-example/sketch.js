var diam1 = 50;
var r, g, b;
function setup(){
	createCanvas(500, 500);
	r = random(255);
	g = random(255);
	b = random(255);
}
function draw(){
	background("green");
	fill(r, g, b);
	stroke("red");
	strokeWeight(8);
	rect(width/4, height/4, diam1, diam1);
	textSize(30);
	noStroke();
	fill("yellow");
	text("MMP 100 Assignment", 100, 100);
	//rect(random(width), random(height), random(100), random(100));
}
function mousePressed(){
	diam1 = diam1 + random(50);
	if(diam1 > 250){
		diam1 = 60;
	}
	r = random(255);
	g = random(255);
	b = random(255);
}