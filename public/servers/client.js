let socket;


function setup(){
	createCanvas(700, 700);

	console.log();
	socket = io.connect(`${window.location.origin}/servers`);

	socket.on('mouseNormalizedFromServer1', (data) => {
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

	socket.emit('mouse1', {'x': mouseX/width, 'y':mouseY/height});
	//io.sockets.emmit if the client that sent it should also recieve?
}