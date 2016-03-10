/**
 * Created by shenn on 16-3-7.
 */
'use strict';
class Player{
    constructor(playerName){
        this.playerName = playerName;
        this.isGovernor = false;
        this.isSelecter = false;

        this.bulidings = new Array(12);
        this.plantations = new Array(12);

        this.vp = 0;
        this.doubloon = 0;

    }
}

module.exports = Player ;