'use strict';
//var Player = require('./module/player');
var uuid = require('node-uuid');
var RoleFactory = require('./module/roles');

var plantationFactory = require('./module/plantations');
var plantation_name_list = ['corn' , 'indigo' , 'sugar' , 'tobacco' , 'coffee'];

class Game{


    constructor(playerAry){
        this.playerAry = playerAry;
        //this.gameID = uuid.v1();

        console.log("Create a new Game , and GameID is : " + this.gameID);

        this.colconistShip = 0;
        this.colonistSupply = 0;

        //#1 on game start event init below var
        this.roleAry = new Array();
        this.buildingAry = null;
        this.plantationAry = null;

        this.shipAry = new Array();
        //
        this.governor = null;
        this.currentChoser = null;

        //#1 end

        this.totalVP = 0;

        this.goodsSupply = {
            'corn' : 10,
            'indigo' : 11 ,
            'sugar' : 11,
            'tobacco' : 9 ,
            'coffee' : 9
        }

        this.logs = [];

    }

    /*
    *
    * */
    startGame(){
        console.log('Game ' + this.gameID + " has been started");
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
            this.playerAry.length / (cnt  + 1) >= 2 ?
                player.plantations[0] = new plantationFactory['indigo']()
                :
                player.plantations[0] = new plantationFactory['corn']();

            cnt++;

        }
    }


    /**
     *
     */
    randomPlayerOrder() {

        for(var index = 0 ; index < this.playerAry.length  ; index++ ){

            var se=  Math.floor( Math.random() * (this.playerAry.length - index) ) + index;

            var temp = this.playerAry[index];
            this.playerAry[index] = this.playerAry[se];
            this.playerAry[se] = temp;

        }

        //MAKE UP PLAYER LINK RELATION , SET GOVERNOR , PRIVILEGE
        for(let i = 0 ; i < this.playerAry ;i++){
            let p = this.playerAry[i];
            let n = i + 1;
            if( n  == this.playerAry.length ) n = 0 ;
            p.next = this.playerAry[n];
        }

        this.playerAry[0].isGovernor = true;
        this.playerAry[0].hasPrivilege = true;

    }

    /**
     *
     */
    initGameResource(){
        //var obj = new RoleFactory['Bulilder']();
        this.roleAry.push(new RoleFactory['Builder']());
        this.roleAry.push(new RoleFactory['Captain']());
        this.roleAry.push(new RoleFactory['Craftsman']());
        this.roleAry.push(new RoleFactory['Mayor']());
        this.roleAry.push(new RoleFactory['Settler']());
        this.roleAry.push(new RoleFactory['Trader']());
        switch (this.playerAry.length){
            case 3:
                this.totalVP = 75;
                this.colonistSupply = 55;
                break;
            case 4:
                this.roleAry.push(new RoleFactory['Prospector']());
                this.totalVP = 100;
                this.colonistSupply = 75;
                break;
            case 5:
                this.roleAry.push(new RoleFactory['Prospector']());
                this.roleAry.push(new RoleFactory['Prospector']());
                this.totalVP = 122;
                this.colonistSupply = 95;
                break;
        }
        for(let i = 1 ; i < 4; i++){
            this.shipAry.push(new GoodsShip(this.playerAry.length + i ));
        }


        this.initGameChoosingItemArray();
    }

    /**
     * depands on player nums , create diff roles
     */
    initGameChoosingItemArray(){

        this.plantationAry = new Array(this.playerAry.length + 1);
        this.refreshPlantationAry();
    }

    /** reset game plantation choose list
     *
     */
    refreshPlantationAry(){
        for(let i = 0 ; i < this.plantationAry.length ; i++){
                this.plantationAry[i] =
                    new plantationFactory[ plantation_name_list [ Math.floor(Math.random() * plantation_name_list.length) ]]();
        }
    }

    /**
     *
     */
    refreshColonistShip(){
        let colonist_cnt = 0;
        for(let i = 0 ; i < this.playerAry.length; i++){
            let p = this.playerAry[i];
            for(let j = 0 ; j < p.bulidings.length ; j++){
                if(p.bulidings[j]){
                    colonist_cnt += buildings[j].slot - buildings[j].curColonist;
                }
            }
        }

        if(colonist_cnt < this.playerAry.length){
            colonist_cnt = this.playerAry.length;
        }

        this.colconistShip = colonist_cnt;
        this.colonistSupply -= colonist_cnt;
    }


    /**
     *
     * @returns {{event: string, target: *}}
     */
    refreshGameRound(){
        let target = null;
        this.refreshPlantationAry();
        this.refreshColonistShip();
        //transition governor
        for(let i = 0 ; i < this.playerAry.length; i++){
            var p = this.playerAry[i];
            if(p.isGovernor){
                p.isGovernor = false;
                p.next.isGovernor = true;
                target = p.next;
            }

        }

        //TODO CHECK GAME END CONDTION
        return {
            event : "ROLE_CHOOSE",
            target : target
        }
    }


    /**
     *
     * @param player
     * @param roleIndex
     * @returns {*}
     */
    actionRole(player , roleIndex){
        //role execute play
        var gameRole = this.roleAry[roleIndex];

        //arg player perform role
        var role_post_ret = gameRole.performRole(player);

        if( ! role_post_ret.event ){

                if(player.next.hasPrivilege){
                    //perform role loop finish  , refresh this phases
                    return this.refreshRolePhase();
                }else{
                    //recursion invoke actionRole
                    this.actionRole(player.next , roleIndex)
                }
        }
        //if after role choose already has interactive event
        return role_post_ret;
    }


    /**
     *
     * @returns {*}
     */
    refreshRolePhase(){
        var reRound = false;
        for(var i = 0 ;i < this.playerAry.length ; i++){
            var p = this.playerAry[i];
            p.currentRole = null;

            if(p.hasPrivilege){
                p.hasPrivilege = false;
                p.next.hasPrivilege = true;
                if(p.next.isGovernor){
                    reRound = true;
                }
            }
        }

        if(reRound){
            return this.refreshGameRound();
        }else{
            return {
                event : 'CHOOSE_ROLE_EVENT'
            };
        }

    }

    /**
     *
     * @param player
     * @param items
     * @returns {*|{}}
     */
    actionItem(player , items){
        var role = player.currentRole;
        return role.actionItem(player , items);
    }






}


class GoodsShip{
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



