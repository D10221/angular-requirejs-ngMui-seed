/// <reference path='../../typings/tsd.d.ts' />
/// <reference path='typings.d.ts' />
define([],()=>{
    function slowThing($q:ng.IQService, $timeout:ng.ITimeoutService) {

        var delay:IDeferred = $q.defer();
        $timeout(()=> {
            delay.resolve(true);
        }, 2000);
        return delay.promise;
    }
    return slowThing
});