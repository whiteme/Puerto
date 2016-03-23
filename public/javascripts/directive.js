/**
 * Created by shenn on 16/3/23.
 */
'use strict';
angular.module('puertoGameBoard').directive('chooseRoleDirective',function($socket){
    console.log("choose role event")
    return {
        restrict: 'EA',
        link : function(scope ,element, attrs) {
                element.click(function(){

                    var data = {
                        gameID : scope.$parent.game.gameID ,
                        rolename : scope.role.name

                    };
                    $socket.emit('role choose' , data );
                    console.log(data)
                });
        }
    };
});