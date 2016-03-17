'use strict';
/**
 * Created by shenn on 16-2-29.
 */


var Game = require('./game.js');
var Player = require('./player');


class GameServer{

    constructor(){
        this.gamePool = {};
    }

    createGame(playerName){

        var player = new Player(playerName);
        var playerAry = new Array();
        playerAry.push(player);

        var game = new Game(playerAry);
        console.log("Create a game , and game ID is : "  + game.gameID)
        this.gamePool[game.gameID] = game;




    }








}





module.exports = new GameServer();
