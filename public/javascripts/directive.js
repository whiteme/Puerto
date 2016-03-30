/**
 * Created by shenn on 16/3/23.
 */
'use strict';
angular.module('puertoGameBoard')
    .directive('chooseRoleDirective',function($socket){
        console.log("choose role event");

        //define socket callback func
        var plantataionChooseEventFn = function(data){
            console.log('socket plantataionChooseEventFn');
            $('.blink').removeClass('blink');
            var itemAry = data.active;
            $('.game-plantation').addClass('blink');

        };



        return {
            restrict: 'EA',
            link : function(scope ,element, attrs) {
                    $socket.on('plantataion-choose-event' , plantataionChooseEventFn);
                    element.click(function(){

                        var data = {
                            gameID : scope.$parent.game.gameID ,
                            roleid : scope.role._id ,
                            player_id : scope.$parent.selfPlayer._id

                        };
                        $socket.emit('role choose' , data );

                    });
            }
        };
    })
    .directive('choosePlantationDirective' , function($socket){
        console.log(' choosePlantationDirective ');

        return {
            restrict: 'EA',
            link : function(scope ,element, attrs) {

                element.click(function(){

                    var data = {
                        gameID : scope.$parent.game.gameID ,
                        player_id : scope.$parent.selfPlayer._id,
                        plantation_index : attrs.itemIndex

                    };
                    $socket.emit('plantation choose' , data );

                });
            }
        };
    });