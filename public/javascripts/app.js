var puertoApp = angular.module('puerto' , [] );
var puertoApp = angular.module('puertoGameBoard' , ['ngSocket'] ).config(["$socketProvider", function ($socketProvider) {
    //$socketProvider.setUrl("http://localhost:9090");
}]);


//puerto.config(function($routeProvider){
//});
