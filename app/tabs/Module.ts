/// <reference path='../../typings/tsd.d.ts' />

define(['angular'], function (angular) {

    var mdl = angular.module('app.tabsDemo', []);

    mdl.config(function ($routeProvider) {
        $routeProvider.when('/tabs', {templateUrl: "app/tabs/view.html"});
    });


});
