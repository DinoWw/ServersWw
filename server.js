
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
var io = require('./sockets/socket_canvas').listen(server);