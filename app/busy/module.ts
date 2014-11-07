/// <reference path='../../typings/tsd.d.ts' />
/// <reference path='typings.d.ts' />

define(['angular','./BusyService','./BusyCtrllr'], (angular:ng.IAngularStatic,BusyService,BusyCtrllr)=> {

    var mdl = angular.module('app.busy', []);

    mdl.service('busyService', BusyService);

    mdl.controller('BusyCtrllr', BusyCtrllr);


    mdl.config(function ($routeProvider) {
        //Inject delay to trigger "...loading..."
        var delay = function ($q, $timeout:ng.ITimeoutService) {
            var delay = $q.defer();
            $timeout(()=> {
                delay.resolve(true);
            }, 2000);
            return delay.promise;
        };

        $routeProvider.when('/busy', {
            templateUrl: "app/busy/busyView.html",
            controller: 'BusyCtrllr',
            resolve: {
                slowThing: delay
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