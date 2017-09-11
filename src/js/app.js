/**
 * Created by 冯智昌 on 2017/9/9/009.
 */
var app = angular.module('gewara', [
    'ngRoute',
    'movies.hot',
    'cinema'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/movies", {
            controller: 'moviesController',
            templateUrl: '../html/movies.html'
        })
        .when("/cinema", {
            controller: 'cinemaController',
            templateUrl: '../html/cinema.html'
        })

        .otherwise({redirectTo: '/movies'});
}]);
