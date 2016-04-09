'use strict';
var ROOM_ID = 0;
var rooms = {};
class Room{
    /**
     * creator: player object
     */
    constructor(appServer, creator){
        this.id = ROOM_ID++; // 房间号
        rooms["_"+this.id] = this;
        this.owner = creator; // 房主
        this.members = {}; // 成员
        this.members[creator.getName()] = creator;
        this.socket = require("socket.io").listen(appServer).of('/'+this.id); // 房间通信
        socket.on('connection', function(socket){
          console.log('room:' + this.id +' connected');
          
          /**
           * 种植
           * data: {
           *   player: player's name,
           *   plant : coffee/corn/indigo/sugar/tobacco object 
           * }
           */
          socket.on('plantation', function (data) {
            //处理逻辑
            //向所有用户广播
            io.sockets.emit('plantation', {});
          });
          
          /**
           * 建筑
           * data: {
           *   player: player's name,
           *   plant : building object 
           * }
           */
          socket.on('building', function (data) {
            //处理逻辑
            //向所有用户广播
            io.sockets.emit('building', {});
          });
        });
    }
    
    /**
     * 加入房间
     * player: player object
     */
    join(player){
        this.members[player.getName()] = player;
    }
    
    /**
     * 离开房间
     */
    leave(player){
       delete this.members[player.getName()];
       if(this.members.length > 0){
           if(this.owner.getName() == player.getName()){
               this.owner.getName() = this.members[0].getName();
           }
       }else{
           destroy();
       }
    }
    
    /**
     * 返回房间号
     */
    getId(){
        return this.id;
    }
    
    /**
     * 返回成员
     */
    getMembers(){
        return this.members;
    }
    
    /**
     * 销毁
     */
    destroy(){
       delete rooms["_"+this.id] 
    }
}

module.exports = Room;