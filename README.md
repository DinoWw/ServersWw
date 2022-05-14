# ServersWw
Web server for managing game servers hosted on the same machine


add folders with index.html files in /public to have them up on the site

for socket servers using socket_io, add .js files that export a function as such:
```js

module.exports.listen = function(io){

    const canvas = io.of('/servers');
        

    canvas.on('connection', function(socket){
        socket.on('mouse', (data) => {
            socket.broadcast.emit('mouseNormalizedFromServer', data);
        });
    });


};

```


