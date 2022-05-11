const express = require('express');
const socket = require("socket.io");

const app = express();

const server = app.listen(3000);

app.use(express.static('public'));


const io = socket(server);

io.sockets.on('connection', function(socket){
	
	socket.on('mouse', (data) => {
		socket.broadcast.emit('mouseNormalizedFromServer', data);
	});


});