'use strict';
define(['angular',
        'app/MainController',
        'app/sidebarRight/SidebarRouter',
        'app/home/Module',
        'app/overlay/Module',
        'app/sidebarRight/module',
        'app/busy/module',
        'app/chat/module',
        'app/scroll/Module',
        'app/forms/module',
        'app/carousel/module',
        'app/tabs/module',
        'app/toggle/module',
        'app/accordion/module',
        'bower_components/underscore/underscore',
        'bower_components/underscore.string/dist/underscore.string.min'
    ],
    function (angular,MainController,SidebarRouter) {

        var demo= angular.module("Demo",[
            "app.home",
            "app.sidebarRight",
            "app.busy",
            "app.chat",
            "app.scrollDemo",
            "app.formsDemo",
            "app.carouselDemo",
            "app.tabsDemo",
            "app.toggleDemo",
            "app.accordionDemo",
            "app.overlayDemo"
        ]);

        var app = angular.module('MobileAngularUiExamples', [
            "ngRoute",
            "ngTouch",
            "mobile-angular-ui",
            "Demo"
        ]);

        app.service('underscore',['$window',function($window){
            return $window._;
        }]);

        app.service('sidebarRouter',  SidebarRouter);
        app.controller('MainController', MainController);

        return app;

    });