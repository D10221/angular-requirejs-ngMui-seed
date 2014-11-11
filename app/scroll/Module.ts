/// <reference path='../../typings/tsd.d.ts' />
define(['angular'],(angular:ng.IAngularStatic)=>{
    var iModule = angular.module('app.scrollDemo',[]);
    iModule.config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/scroll', {
            templateUrl: "app/scroll/view.html",
            controller:($scope)=>{
                var scrollItems = [];
                for (var i = 1; i <= 100; i++) {
                    scrollItems.push("Item " + i);
                }
                $scope.scrollItems = scrollItems;
            }
        });
    });
    return iModule;
});
