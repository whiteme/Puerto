/**
 * Created by shenn on 16-3-2.
 */
'use strict';

angular.module('puerto').service('puertoSocket' , function(){
    var socket = io.connect('http://localhost:3000');
});