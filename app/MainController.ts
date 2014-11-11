/// <reference path='../typings/tsd.d.ts' />
/// <reference path='typeOfill.d.ts' />
class MainController {

    static $inject = ['$rootScope', '$scope', '$location', 'sidebarRouter'];

    constructor($rootScope:Angular.IRootScope, $scope) {

        $scope.userAgent = navigator.userAgent;

        // missing from $watch declaration
        //$watch(watchExpression: string,
        //      listener?: (scope: ng.IScope,newValue: any, oldValue: any) => any,
        //      objectEquality?: boolean): Function;
        var target = 'loading'; //set to busy and it will catch , and hide, scoped busyService
        // WHy loading triggers here and not in index.html?
        // isn't the same rootScope ?
        $rootScope.$watch(target,(newValue,oldValue,scope)=>{
            console.log('@target changed scope: @scope, newValue: @newValue ,oldValue: @oldValue'
                .replace(/@target/,target)
                    .replace(/@scope/,scope.toString())
                .replace(/@newValue/,newValue)
                .replace(/@oldValue/,oldValue)
            );
            //map to controller.scope , but dont shadow rootscope.loading /rootscope.busy
            $scope.isLoading = newValue === true || newValue === false ? newValue : false
        })
    }
}

define([], ()=> {
    return MainController;
});