myNba = angular.module('myNba', ['ngRoute']);

myNba.config(['$routeProvider', function ($routerProvider) {
    $routerProvider.
    when('/home', {
        templateUrl: './views/home.html'
        , controller: 'myController'
    }).
    when('/rebs', {
        templateUrl: './views/rebs.html'
        , controller: 'myControllerRebounds'
    }).
    when('/assists', {
        templateUrl: './views/assists.html',
        controller: 'myControllerAssists'
    }).
    when('/steals',{
        templateUrl: './views/steals.html',
        controller: 'myControllerSteals'
    })
    .otherwise({
        redirectTo: '/home'
    });

}]);