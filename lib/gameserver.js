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
        if(playerAry[0].playerName == 'KOBE BRANT'){
            game.gameID = 'DEMO_GAME_4_TEST';
        }

        console.log("Create a game , and game ID is : "  + game.gameID)
        this.gamePool[game.gameID] = game;




    }


    setupFakeGame(){
        this.createGame("KOBE BRANT");
        var game = this.gamePool['DEMO_GAME_4_TEST'];

        game.playerAry.push(new Player("LEBORN JAMES"));
        game.playerAry.push(new Player("SHARK O'NEAL"));
        game.playerAry.push(new Player("TIM DUNCAN"));
        game.playerAry.push(new Player("STEPHEN CURRY"));

        game.startGame();
    }








}





module.exports = new GameServer();
