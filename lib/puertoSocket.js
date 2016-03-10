/**
 * Created by shenn on 16-3-2.
 */

module.exports = PuertoSocket;





function PuertoSocket(appServer , gameServer){

    this.io = require('socket.io')(appServer);
    this.io.listen(appServer);
    this.gameServer = gameServer;



}


/*
 * */
PuertoSocket.prototype.initPuertoListener = function(){

    var gameServer = this.gameServer

    this.io.on('connect' , function(socket){
        console.log("Here new clinet is coming")
        socket.emit("gameListResult" , gameServer.gamePool);
        socket.emit('getGameByIDResultEvent',gameServer.gamePool['test']);
    });


};


