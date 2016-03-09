'use strict';
//var Player = require('./module/player');
var uuid = require('node-uuid');
class Game{


    constructor(playerAry){
        this.playerAry = playerAry;
        this.gameID = uuid.v1();
        console.log("Create a new Game , and GameID is : " + this.gameID);

        this.colconistShip = {};
        this.colonistSupply = 0;

        this.roleAry = new Array();
        this.buildingAry = new Array();

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










var pa = new Array();
for(var i = 0 ; i < 4; i++){
    var o = new Object();
    o['pos'] = i ;
    pa.push(o);
}
var g = new Game(pa);
g.randomPlayerOrder();
for(var i = 0 ; i < g.playerAry.length; i++){
    console.log(g.playerAry[i]['pos']);
}