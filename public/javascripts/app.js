var puertoApp = angular.module('puertoGameBoard' , ['ngSocket'] ).config(["$socketProvider", function ($socketProvider) {


}]);


puertoApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'RouteListCtl'
        })
        .when('/game', {
            templateUrl: 'gameborad.html',
            controller: 'gameBoardController'
        })
        .otherwise({
            redirectTo: '/'
        });


});
