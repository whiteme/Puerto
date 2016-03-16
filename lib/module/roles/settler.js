/**
 * Created by shenn on 16/3/10.
 */
'use strict';
var Role = require('./role')
var plant = require('../plantations')
class Settler extends Role{

    /**
     *
     * @param player
     * @returns {{active: string[], target: *, event: string}}
     */
    performRole(player){
        var ret = {
            active : ['plantation-item'],
            target : player,
            event : "plantataion-choose-event"
        }
        if(player.hasPrivilege){
            ret.active.push('quarry-item');
        }
        return  ret;
    }

    /**
     *
     * @param player
     * @param items
     * @returns {*|Event}
     */
    actionItem(player , items){
        var ret = {
            active : ['role-pool-item'] ,
            event : "role-choose-event"
        }

        for(let item in items){
            player.plantations.push(new plant[item.name]());
        }

        return event;
    }
}

module.exports = Role;