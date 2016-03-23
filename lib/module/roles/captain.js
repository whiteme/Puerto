'use strict';
/**
 * Created by shenn on 16-2-29.
 */

var Role = require('./role.js');
class Captain extends Role{
    constructor(){
        super();
        this.name = "Captain";
        this.choosen  = false;
        this.extraDoubloon = 0;
    }
}


module.exports = Captain;