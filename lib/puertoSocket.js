/**
 * Created by shenn on 16-3-2.
 */

module.exports = PuertoSocket;





function PuertoSocket(appServer , gameServer){
    io= require("socket.io")
    this.socket = io.listen(appServer);
    this.gameServer = gameServer;
}


/*
 * */
PuertoSocket.prototype.initSocketEventHandler = function(){
    var gameServer = this.gameServer;
    this.socket.on('connection', function(client) {
        console.log("Welcome a new client is coming ... ...")

        client.emit('getGameByIDResultEvent', gameServer.gamePool['DEMO_GAME_4_TEST']);


        client.on('role choose', function (data) {
            console.log(gameServer.gamePool[data.gameID].gameID);
            var game = gameServer.gamePool[data.gameID];

            var roleindex = data.roleindex;

            game.actionRole( player ,  roleindex );
        });
    });
};




