'use strict';
//var Player = require('./module/player');
var uuid = require('node-uuid');
var gameRoleFactory = require('./module/roles');

var plantationFactory = require('./module/plantations');
var plantation_name_list = ['corn'];

class Game{


    constructor(playerAry){
        this.playerAry = playerAry;
        //this.gameID = uuid.v1();
        this.gameID = 'test'
        console.log("Create a new Game , and GameID is : " + this.gameID);

        this.colconistShip = {};
        this.colonistSupply = 0;

        //#1 on game start event init below var
        this.roleAry = null;
        this.buildingAry = null;
        this.plantationAry = null;
        //#1 end commet

        this.totalVP = 0;

        this.goodsSupply = {
            'corn' : 10,
            'indigo' : 11 ,
            'sugar' : 11,
            'tobacco' : 9 ,
            'coffee' : 9
        }



    }

    /*
    *
    * */
    startGame(){
        //TODO check game start condtion
        this.checkGameEndCondtion();
        //init game
        this.randomPlayerOrder();
        this.initPlayerStatus();
        this.initGameResource();


    }


    checkGameStartCondtion(){

    }


    checkGameEndCondtion(){

    }

    /*
    *
    *
    *  */
    initPlayerStatus() {
        var cnt = 0;

        while(cnt < this.playerAry.length){
            var player = this.playerAry[cnt];
            player.doubloon = this.playerAry.length - 1;

            //init plantation


        }
    }

    randomPlayerOrder() {

        for(var index = 0 ; index < this.playerAry.length  ; index++ ){

            var se=  Math.floor( Math.random() * (this.playerAry.length - index) ) + index;

            var temp = this.playerAry[index];
            this.playerAry[index] = this.playerAry[se];
            this.playerAry[se] = temp;

        }

    }


    initGameResource(){
        switch (this.playerAry.length){
            case 3:
                this.totalVP = 75;
                this.colonistSupply = 55;
                break;
            case 4:
                this.totalVP = 100;
                this.colonistSupply = 75;
                break;
            case 5:
                this.totalVP = 122;
                this.colonistSupply = 95;
                break;
        }
        initGameChoosingItemArray();
    }

    initGameChoosingItemArray(){

        this.plantationAry = new Array(this.playerAry.length + 1);
        refreshPlantationAry();

        this.roleAry = new Array(6 + (this.playerAry.length - 3));
        //TODO push different role 2 role Ary



    }

    refreshPlantationAry(){
        for(let i = 0 ; i < this.plantationAry.length ; i++){
            if(!this.plantationAry[i]){

                this.plantationAry[i] =
                    new plantationFactory[ plantation_name_list [ Math.floor(Math.random() * plantation_name_list.length) ]]();
            }
        }
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


class ColonistShip{
    constructor(capacity){
        this.capacity = capacity;
        this.goodsname = null;
        this.loadnum = 0;
    }

    loadgood(goodsname , total){
       var retnum = -1;
        if(this.goodsname && this.goodsname != goodsname)
            return retnum;
        this.goodsname = goodsname;
        var restCap = this.capacity - this.loadnum;
        if(restCap <= total){
            this.loadnum = this.capacity;
            retnum = restCap;
        }else{
            this.loadnum = this.loadnum + total;
            retnum = total;
        }
        return retnum;
    }

    refreshShip(){
        this.goodsname = null;
        this.loadnum = 0;
    }

}








module.exports = Game;



