'use strict';
define(['angular'],function(angular){
        return  angular.module('app.home',[]).config(function ($routeProvider/*, $locationProvider*/) {
            $routeProvider.when('/', {templateUrl: "app/home/home.html"});
        });
    }
);
