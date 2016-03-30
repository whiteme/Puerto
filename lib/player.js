/**
 * Created by shenn on 16-3-7.
 */
'use strict';
var uuid = require('node-uuid');
class Player{
    constructor(playerName){
        this._id = uuid.v1();
        this.playerName = playerName;
        this.isGovernor = false;
        this.hasPrivilege = false;
        this.currentRole = null;

        this.bulidings = [];
        this.plantations = [];

        this.vp = 0;
        this.doubloon = 0;

        this.next = null;

    }
}

module.exports = Player ;