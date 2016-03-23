/**
 * Created by shenn on 16-3-1.
 */
'use strict';
angular.module('puerto').controller('indexInitCtrl' ,   function( $scope , $socket){

    $socket.on('gameListResult' , function(data){

        $scope.gameList = data;
    });

});
angular.module('puertoGameBoard').controller('gameBoardController' ,function($scope , $socket){

    $scope.getColSizeDefine = function(num){
        return new Array(num);
    };

    $socket.on('getGameByIDResultEvent' , function( game){
        $scope.game = game;
        $scope.curPlayer = game.playerAry[0];


    });

    $scope.switchPlayer = function(){
        $scope.curPlayer = this.player;
        //$scope.$apply();
        console.log("")
    }

});


