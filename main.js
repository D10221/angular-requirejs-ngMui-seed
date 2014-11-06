
//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

function CallBack(){
    require(['angular', 'angular-route', 'angular-touch', 'mobile-angular-ui','App'], function (angular,ngRoutr,ngTouch,ngMui,app) {
        angular.element().ready(function () {
            angular.resumeBootstrap([app.name]);
        });
    });
}

require.config({

    //baseUrl: "angular-seed",
    // alias libraries paths
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angular-touch': 'bower_components/angular-touch/angular-touch',
        'mobile-angular-ui': 'bower_components/mobile-angular-ui/dist/js/mobile-angular-ui',
        //'ui-bootstrap': 'bower_components/angular-ui-bootstrap/ui-bootstrap-tpls',
        'angular-mocks': 'bower_components/angular-mocks/angular-mocks',
        text: 'bower_components/requirejs-text/text',
        'App': 'app/demo'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-route': ['angular'],
        'angular-touch': ['angular'],
        'angular-mocks': {
            deps:['angular'],
            'exports':'angular.mock'
        },
        'mobile-angular-ui':['angular'],
        // 'angular-route', 'angular-touch', 'mobile-angular-ui'
        'App': ['angular', 'angular-route', 'angular-touch', 'mobile-angular-ui']
    },
    priority: [
        "angular"
    ],
    //deps: ['app']     // kick start application
    callback: CallBack
});



