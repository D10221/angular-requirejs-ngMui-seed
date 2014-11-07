'use strict';
define(['angular',
        'app/MainController',
        'app/sidebarRight/SidebarRouter',
        'app/home/module',
        'app/demo/module',
        'app/sidebarRight/module',
        'app/busy/module',
        'app/chat/module',
        'bower_components/underscore/underscore',
        'bower_components/underscore.string/dist/underscore.string.min',
        'bower_components/angular-hotkeys/build/hotkeys.min'
    ],
    function (angular,MainController,SidebarRouter) {
        var app = angular.module('MobileAngularUiExamples', [
            "ngRoute",
            "ngTouch",
            "mobile-angular-ui",'cfp.hotkeys',
            "app.home",
            "app.sidebarRight",
            "app.busy",
            "app.chat",
            "ngMui.demo"
        ]);
        app.service('underscore',['$window',function($window){
            return $window._;
        }]);

        app.service('sidebarRouter',  SidebarRouter);
        app.controller('MainController', MainController);


        return app;

    });