let socket;


function setup(){
	createCanvas(700, 700);

	socket = io.connect('http://localhost:3000');

	socket.on('mouseNormalizedFromServer', (data) => {
		circle(data.x*width, data.y*height, 30);
	});

	background(0);
	noStroke();
}


function draw(){
}

function mouseDragged(){
	circle(mouseX, mouseY, 30);

	socket.emit('mouse', {'x': mouseX/width, 'y':mouseY/height});
	//io.sockets.emmit if the client that sent it should also recieve?
}