
module.exports.listen = function(io){

    const canvas = io.of('/servers');
        

    canvas.on('connection', function(socket){
        socket.on('mouse1', (data) => {
            socket.broadcast.emit('mouseNormalizedFromServer1', data);
        });
    });


};