/// <reference path='../../typings/tsd.d.ts' />
/// <reference path='typings.d.ts' />

define(['angular','./BusyService','./BusyCtrllr','./SlowThing'], (angular:ng.IAngularStatic,BusyService,BusyCtrllr,slowthing)=> {

    var mdl = angular.module('app.busy', []);

    mdl.service('busyService', BusyService);

    mdl.controller('BusyCtrllr', BusyCtrllr);


    mdl.config(function ($routeProvider) {

        $routeProvider.when('/busy', {
            templateUrl: "app/busy/busyView.html",
            controller: 'BusyCtrllr',
            resolve: {
                slowThing: slowthing
            }
        });
    });

    mdl
        .run(function ($rootScope) {

            $rootScope.$on("$routeChangeStart", function () {
                $rootScope.loading = $rootScope.busy = true;
            });

            $rootScope.$on("$routeChangeSuccess", function () {
                $rootScope.loading = $rootScope.busy = false;
            });
        });

    return mdl;
});