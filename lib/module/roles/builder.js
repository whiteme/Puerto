'use strict';
/**
 * Created by shenn on 16-2-29.
 */

var Role = require('./role.js');
class Builder extends Role{
    constructor(){
        super();
        this.name = "Bulider";
        this.choosen  = false;
        this.extraDoubloon = 0;
    }
}


module.exports = Builder;