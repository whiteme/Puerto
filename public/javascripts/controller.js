/**
 * Created by shenn on 16-3-1.
 */
'use strict';
angular.module('puerto').controller('indexInitCtrl' ,   function( $scope , puertoSocket){

    puertoSocket.on('gameListResult' , function(data){

        $scope.gameList = data;
    });

});
angular.module('puerto').controller('gameBoardController' , function($scope , puertoSocket){

    $scope.getColSizeDefine = function(num){
        return new Array(num);
    };

    puertoSocket.on('getGameByIDResultEvent' , function(game){
        $scope.game = game;
        $scope.player = game.playerAry[0];
    });
});


