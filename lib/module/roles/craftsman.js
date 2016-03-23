'use strict';
/**
 * Created by shenn on 16-2-29.
 */

var Role = require('./role.js');
class Craftsman extends Role{
    constructor(){
        super();
        this.name = "Craftsman";
        this.choosen  = false;
        this.extraDoubloon = 0;
    }
}


module.exports = Craftsman;