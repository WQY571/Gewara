/**
 * Created by 冯智昌 on 2017/9/9/009.
 */
(function (angular) {

    var moviesModule = angular.module('movies.hot', []);

   moviesModule.controller('moviesController', ["$scope", "$http", function ($scope, $http) {
        window.doubanMovieCallback = function (data) {
            if (data.msg) {
                //返回错误信息
                $scope.message = data.msg;
            } else {
                $scope.movies = data;
                $scope.message = '';
                $scope.movies.title='正在售票'
            }
        };
        //设置网络请求地址
        var url = "https://api.douban.com/v2/movie/in_theaters?callback=doubanMovieCallback";
        $http.jsonp(url).error(function () {
        });
    }]);

})(angular);