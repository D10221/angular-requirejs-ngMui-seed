/// <reference path='../../typings/tsd.d.ts' />

define(['angular'], function (angular) {

    var mdl = angular.module('app.toggleDemo', []);

    mdl.config(function ($routeProvider) {
        $routeProvider.when('/toggle', {templateUrl: "app/toggle/view.html"});
    });


});
