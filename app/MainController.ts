/// <reference path='../typings/tsd.d.ts' />

class MainController {

    static $inject = ['$rootScope', '$scope', '$location', 'sidebarRouter'];

    constructor($rootScope, $scope) {

        $rootScope.$on("$routeChangeSuccess", function () {
           // setSidebarRight();
        });

        var scrollItems = [];

        for (var i = 1; i <= 100; i++) {
            scrollItems.push("Item " + i);
        }

        $scope.scrollItems = scrollItems;

        $scope.invoice = {payed: true};

        $scope.userAgent = navigator.userAgent;

    }
}

define([], ()=> {
    return MainController;
});