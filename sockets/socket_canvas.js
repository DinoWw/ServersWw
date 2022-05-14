
module.exports.listen = function(io){

    const canvas = io.of('/canvas');
        

    canvas.on('connection', function(socket){
        socket.on('mouse', (data) => {
            socket.broadcast.emit('mouseNormalizedFromServer', data);
        });
    });


};