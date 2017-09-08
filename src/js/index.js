/**
 * Created by 冯智昌 on 2017/9/7/007.
 */
angular.module("gewara",['ngRoute'])
.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/movies",{templateUrl:"movies.html"})
        .when("/cinema",{templateUrl:"cinema.html"})
        .otherwise({redirectTo:'/movies'});
}]);
