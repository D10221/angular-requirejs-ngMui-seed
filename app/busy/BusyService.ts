/// <reference path='../../typings/tsd.d.ts' />
/// <reference path='typings.d.ts' />

define([],()=>{
    function BusyService ($rootScope, $timeout){

        var busyPromise:ng.IPromise<any>;
        var setBusy = function (busy, timeout):ng.IPromise<any> {
            $rootScope.busy = !busy;
            if (!$timeout.cancel(busyPromise)) {
                busyPromise = $timeout(()=> {
                    $rootScope.busy = busy;
                }, timeout);
            }
            return busyPromise;
        };

        function setBusyAndWaitFor(deferred:IDeferred, iWaitForConfig?:IWaitForConfig):IPromise {

            var options = iWaitForConfig || {onTimeOut: null, timeOut: null, keepWaiting: false};

            var onTimeOut = function () {
                $rootScope.busy = options.keepWaiting;
                if (typeof options.onTimeOut === 'function') {
                    options.onTimeOut(deferred)
                } else {
                    deferred.reject(new Error('Timed out'))
                }
            };

            $timeout(onTimeOut, options.timeOut || 60000);

            $rootScope.busy = true;

            return deferred.promise.then(
                ()=>  ($rootScope.busy = false),
                    error=> ($rootScope.busy = false)
            )
        };

        return {
            setBusy: setBusy,
            setBusyAndWaitFor: setBusyAndWaitFor
        }
    };
    return BusyService;
})