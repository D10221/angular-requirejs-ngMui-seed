/// <reference path='../../typings/tsd.d.ts' />
/// <reference path='typings.d.ts' />
/// <reference path='../typeOfill.d.ts' />

class UEventBus implements IUEventBus {

    static $inject = ['$rootScope'];

    constructor(private $rootScope:Angular.IRootScope) {

    }

    pub(msg:any, data:any) {
        data = data || {};
        this.$rootScope.$emit(msg, data);
    }

    sub(msg:string, callback:(event:ng.IAngularEvent, args:any[]) => any, scope?:ng.IScope ) {
        var unbind = this.$rootScope.$on(msg, callback);
        if (scope!==null && scope !== undefined) {
            scope.$on('$destroy', () => unbind());
        }
    }

    takeOne(msg:string, func:()=>void, scope:ng.IScope):void{
        var disposed = false;
        var unbind = this.$rootScope.$on(msg,  ()=> {
            func();
            this.$rootScope.unbind(this);
            disposed = true;
        });
        if (scope && !disposed) {
            scope.$on('$destroy', ()=>unbind());
        }
    }
}

define(['angular'],(angular)=>{
    return angular.module('app.eventBus',[]).service('eventBus',  UEventBus);
});