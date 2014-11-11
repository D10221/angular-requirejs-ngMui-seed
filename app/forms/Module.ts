/// <reference path='../../typings/tsd.d.ts' />
define(['angular','./Controller'],(angular,Controller)=>{
    var mdl = angular.module('app.formsDemo',[]);
    mdl.config(($routeProvider)=>{
        $routeProvider.when('/forms', {
                templateUrl: "app/forms/view.html",
                controller: Controller
            }
        );
    });
    return mdl;
});