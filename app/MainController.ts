/// <reference path='../typings/tsd.d.ts' />

class MainController {

    static $inject = ['$rootScope', '$scope', '$location', 'sidebarRouter'];

    constructor($rootScope, $scope) {

        $rootScope.$on("$routeChangeSuccess", function () {
           // setSidebarRight();
        });



        $scope.invoice = {payed: true};

        $scope.userAgent = navigator.userAgent;

    }
}

define([], ()=> {
    return MainController;
});