/**
 * Created by shenn on 16/3/10.
 */
'use strict';
class Building{

    constructor(name , conlonistSlot ,vp , cost , size , maxQuarry ){
        this.name = name;
        this.conlonistSlot  = conlonistSlot;
        this.vp = vp ;
        this.cost = cost;
        this.size = size;
        this.maxQuarry = maxQuarry;
        //dynamic
        this.curQuarry = 0;
        this.curConlonist = 0;

    }
}

module.exports = Building;