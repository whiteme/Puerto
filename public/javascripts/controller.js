/**
 * Created by shenn on 16-3-1.
 */
'use strict';
angular.module('puerto').controller('indexInitCtrl' , function($scope){

    var socket = io.connect('http://localhost:3000');
    socket.on('gameListResult' , function(data){
        console.log("gameList size is  : "  + data);

    });

    socket.on('connection' , function(){
        console.log("Success 2 connect Game Server");
    })
});