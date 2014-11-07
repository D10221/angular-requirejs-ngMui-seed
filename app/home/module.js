'use strict';
define(['angular'],function(angular){
        return  angular.module('app.home',[])
            .config(['$routeProvider',
                function ($routeProvider/*, $locationProvider*/) {
                $routeProvider.when('/', {templateUrl: "app/home/home.html"});
            }]);
    }
);
