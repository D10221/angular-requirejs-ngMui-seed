/// <reference path='../../typings/tsd.d.ts'/>
/// <reference path='sideBarRouter.ts' />
/// <reference path='SidebarCtroller' />

define(['angular', 'app/sidebarRight/sidebarRouter', 'app/sidebarRight/SidebarCtroller','app/helpers/quickAndDirtyLogger'],
    // provide default sideBarView and Controller
    (angular, SidebarRouter, SidebarCtroller,log)=> {

        return angular.module('app.sidebarRight', [])
            .service('sidebarRouter', SidebarRouter)
            .controller('SidebarCtroller', SidebarCtroller)
            .run(
            ($rootScope:ISideBarRootScope,
             $location:ng.ILocationService,
             sidebarRouter:SidebarRouter) => {
                $rootScope.$on("$routeChangeStart",
                    function (event:ng.IAngularEvent, next:Angular.IRouteChangeEventData, current:Angular.IRouteChangeEventData) {
                        sidebarRouter.getTemplate(next.$$route)
                            .then(
                                found=> {
                                log(this,'Sidebar: Ok: got @path ', {path: found.routePath});
                                $rootScope.sidebarRight = found.templatePath
                            },
                                error=> {
                                log(this,'Sidebar for @path : @error', {
                                    path: ( next.$$route.redirectTo || next.$$route.originalPath ), error: error.message
                                });
                                if ($rootScope.sidebarRight !== sidebarRouter.defaultTemplate) {
                                    $rootScope.sidebarRight = sidebarRouter.defaultTemplate;
                                }
                            }
                        );
                    });
            });
    });
