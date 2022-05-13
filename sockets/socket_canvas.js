

const socketio = require("socket.io");

module.exports.listen = function(server){

    const io = socketio(server);
    const canvas = io.of('/canvas');
        

    canvas.on('connection', function(socket){
        socket.on('mouse', (data) => {
            socket.broadcast.emit('mouseNormalizedFromServer', data);
        });
    });

    return io;

};