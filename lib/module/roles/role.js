/**
 * Created by shenn on 16-2-29.
 */

'use strict';
var uuid = require('node-uuid');
class Role{
    constructor(){
        this._id = uuid.v1();
        this.choosen  = false;
        this.extraDoubloon = 0;
    }

    performRole(){
        return {};
    }

    actionItem(){
        return {};
    }


}
module.exports = Role;