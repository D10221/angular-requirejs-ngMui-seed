/// <reference path='../../typings/tsd.d.ts' />
define(['angular'], function (angular) {
    var mdl = angular.module('app.overlayDemo', []);

    mdl.config(function ($routeProvider) {
        $routeProvider.when('/overlay', { templateUrl: "app/overlay/view.html" });
    });
    return mdl;
});
//# sourceMappingURL=Module.js.map
