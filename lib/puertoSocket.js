/**
 * Created by shenn on 16-3-2.
 */

module.exports = PuertoSocket;





function PuertoSocket(appServer , gameServer){
    io= require("socket.io");
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
            var player_id = data.player_id;
            var role_id = data.roleid;

            var retEvent = game.actionRole( player_id ,  role_id );
            if(retEvent.event){
                client.emit(retEvent.event , retEvent);
            }
        });

        client.on('plantation choose', function (data) {

            var game = gameServer.gamePool[data.gameID];
            var player_id = data.player_id;
            var plantation_index = data.plantation_index;

            var retEvent = game.actionItem( player_id ,  game.plantationAry[plantation_index] );

        });
    });
};




