let socket;


function setup(){
	createCanvas(700, 700);

	socket = io.connect('http://localhost:3000/canvas');

	socket.on('mouseNormalizedFromServer', (data) => {
		fill(0);
		circle(data.x*width, data.y*height, 30);
	});

	background(127);
	noStroke();
}


function draw(){
}

function mouseDragged(){
	fill(255);
	circle(mouseX, mouseY, 30);

	socket.emit('mouse', {'x': mouseX/width, 'y':mouseY/height});
	//io.sockets.emmit if the client that sent it should also recieve?
}