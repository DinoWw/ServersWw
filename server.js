const config = require('config');



// File server initialization
console.log('File server booting');
const express = require('express');
const app = express();
const port = config.get('fileserver.port');
const server = app.listen(port);
app.use(express.static('public'));
console.log(`File server running on port ${port}`);




//
const socketio = require("socket.io");
const io = socketio(server);


const fs = require("fs");
function getFiles(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isFile();
  });
}


const paths = getFiles("sockets");


for(const path of paths){
	require(`./sockets/${path}`).listen(io);
}