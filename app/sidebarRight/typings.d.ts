/// <reference path='../../typings/tsd.d.ts'/>

 interface ISideBarRegistration {
    routePath:string;
    templatePath:string
}

interface ISideBarRegistrationSearch {
    routePath:string;
    templatePath?:string
}

 interface ISidebarRouter {

 }
 interface IRouteMatch{
     path:string; options:{key:string};
 }
interface ISideBarRootScope extends ng.IRootScopeService{
    sidebarRight:string;
}
