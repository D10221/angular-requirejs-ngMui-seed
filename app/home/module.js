define(['angular']
    ,function(angular){
        var mdl =angular.module('app.home',[])
        mdl.config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', {templateUrl: "app/home/home.html"});
        });
        return mdl;
    }
);
