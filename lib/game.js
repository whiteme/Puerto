'use strict';
//var Player = require('./module/player.js');
var uuid = require('node-uuid');
class Game{


    constructor(playerAry){
        this.playerAry = playerAry;
        this.gameID = uuid.v1();
        console.log(this.gameID);

    }

    /*
    *
    * */
    startGame(){
        if( ! this.playerAry || this.playerAry.length < 3){

        }

        this.randomPlayerOrder();
        this.initPlayerStatus();

    }


    checkGameStartCondtion(){

    }


    checkGameEndCondtion(){

    }

    /*
    *
    *
    *  */
    initPlayerStatus(player) {
        if(player.orderProp < 3){
            //set player plantaion indingo
        }else{
            //set player plantaion corn
        }
        player.doubloon = this.playerAry.length - 1;
        player = player.next;
        if(player){
            this.initPlayerStatus(player);
        }
    }

    randomPlayerOrder() {
        //generator player order
        //link player
        //set first player governor
        this.firstPlayer = null;
    }


    /*
    *
    *
    * */
    playGameRound(){
        refreshPlantaionPool();
        refreshColonistShip();
    }

    /**/
    playGameRole(player , role){
        //role execute play



    }

    activeItemChoosing(itemName){

    }



    //create Game


}

module.exports = Game;