/// <reference path='../../typings/tsd.d.ts' />

define(['angular'],  (angular:ng.IAngularStatic)=> {

    return angular.module('app.busy', []).directive('busyLoading', function ($rootScope) {

        $rootScope.$on("$routeChangeStart", function () {
            $rootScope.loading = true;
        });

        $rootScope.$on("$routeChangeSuccess", function () {
            $rootScope.loading = false;
        });
    });
});