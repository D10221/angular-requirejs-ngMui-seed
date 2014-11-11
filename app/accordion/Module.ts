/// <reference path='../../typings/tsd.d.ts' />

define(['angular'], function (angular) {
    var mdl = angular.module('app.accordionDemo', []);
    mdl.config(function ($routeProvider) {
        $routeProvider.when('/accordion', {templateUrl: "app/accordion/view.html"});
    });
    return mdl;
});


