/**
 * Created by shenn on 16-3-1.
 */
'use strict';
angular.module('puerto').controller('indexInitCtrl' ,   function( $scope , puertoSocket){

    puertoSocket.on('gameListResult' , function(data){

        $scope.gameList = data;
    });

});