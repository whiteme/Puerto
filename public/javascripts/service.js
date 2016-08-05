/**
 * Created by shenn on 16-3-2.
 */
'use strict';
angular.module('puerto',[]).service('puertoSocket' , function($rootScope){
    var socket = io.connect('http://localhost:9090/');
    //socket.emit("role choose" , 'just a test');
    console.log("init socket connection... ...")
    return {
        on: function(eventName, callback) {
            socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function(eventName, data, callback) {
            console.log(socket.emit)
            socket.emit(eventName, data, function() {
                alert(arguments)
                var args = arguments;
                $rootScope.$apply(function() {
                    if(callback) {
                        callback.apply(socket, args);
                    }
                });
            });
        }
    };

        //TODO  game board html function



});