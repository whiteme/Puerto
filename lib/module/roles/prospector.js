'use strict';
/**
 * Created by shenn on 16-2-29.
 */

var Role = require('./role.js');
class Prospector extends Role{
    constructor(){
        super();
        this.name = "Prospector";
        this.choosen  = false;
        this.extraDoubloon = 0;
    }
}


module.exports = Prospector;