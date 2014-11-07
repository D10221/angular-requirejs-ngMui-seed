/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="typings.d.ts" />

class SidebarRouter implements ISidebarRouter {

    name:string
    //TODO config
    defaultTemplate:string = 'app/sidebarRight/sidebarRightView.html';

    registrations : ISideBarRegistration[] = [
        {
            routePath: '/',
            templatePath: this.defaultTemplate
        }
    ];

    static $inject = ['$log', "underscore",'$q'];

    constructor(private $log:ng.ILogService, private  _:UnderscoreStatic,private $q:ng.IQService) {

        this.name = 'SidebarRouter';
        this.addRegistration({
            templatePath: this.defaultTemplate,  routePath: '*'
        });
    }
    findRegistration(search: ISideBarRegistrationSearch): ISideBarRegistration{
        return this._.findWhere(this.registrations, search);
    }
    getTemplate :(route:Angular.IRoute) =>ng.IPromise<ISideBarRegistration> = (route) => {

        var deferred = this.$q.defer();

        var regex = /(.+)(?:\?.*|\/.*)/g; //Match /whatever/[optional]/[etc] but not query parameters like ?id=1

        var path =(function (path){
           return path ? path.replace(regex, '$1') : null ;
        }(route.redirectTo|| route.originalPath));

        var result = path ? this.findRegistration({routePath:path}): null;
        if (result) {
            deferred.resolve(result);
        } else{
            deferred.reject(new Error('Not Found'));
        }

        //return this._.findWhere(this.registrations, {location: key, location
        return deferred.promise;

    };

    addRegistration = (reg:ISideBarRegistration)=> {

        var found = this._.findWhere(this.registrations, reg);
        if (found) { // todo: replace ?
           throw new Error(this.name + ': Tried to add to route ' + reg.templatePath + ' more than once');
        }
        this.$log.info(this.name + ': Registering Route for sideBar = ' +
        reg.templatePath + ', routePath: ' + reg.routePath);

        this.registrations.push(reg);
    }
}

define([], ()=> {
    return SidebarRouter;
});