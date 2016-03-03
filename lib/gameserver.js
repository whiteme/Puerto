/**
 * Created by shenn on 16-2-29.
 */


var game = require('./game.js');
//var Player = require('./module/player.js');

var GlobalCache = require('memory-cache');

var GameServer = (function(){

    this.gamePool = new Map();
    GlobalCache.put('gamePool'  , this.gamePool);


    this.setIO = function(io){
        this.io = io;
    }

    this.createGame = function (creatorName){
        var creator = new Player(creatorName);
        var playerAry = new Set();
        playerAry.add(creator);
        var game = new Game(playerAry);
        gamePool.set(game.gameID , game);
        return game;

    }
});

/*
*
*
* */

/*
*
*
* */
function joinGame(gameID , playerName){
    if(gamePool.has(gameID)){
        var game = gamePool.get(gameID);
        var player = new Player(playerName);
        game.playerAry.add(player);
        //TODO create websocket
    }


}


/*
*
*
*/
function startGame(gameID){
    var game = getGame(gameID);
    if(game){
        game.startGame();
    }
}

/*destroy game*/
function destroyGame(gameID){
    if(gamePool.has(gameID)){
        var game = gamePool.delete(gameID);

    }
}
/*
*
*/
function getGame(gameID){
    if(gamePool.has(gameID)){
        return gamePool.get(gameID);
    }
    return null;
}


function select4PassPhase(gameID , playerName){
    var game = getGame(gameID);
}


function selectRole(gameID , player , role){
    var game = getGame(gameID);
    if(game){
        game.playGameRole(player , role);
    }
}



function selectGoods2Load(gameID , player , goodsName ){

}


function selectShip4Load(gameID , shipID , player){

}

function selectGoods2Trade(gameID , player , goodsName){

}

function selectPlantaion4IsLand(gameID , player , plantaionName){

}

function selectBuilding4City(gameID , player , buildingName){

}


function selectColonist(gameID , player , buildingName , plantaionName){

}

function selectGoods2AvoidRot(gameID , player , goodsName){

}


module.exports = GameServer;
