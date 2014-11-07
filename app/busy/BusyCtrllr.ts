/// <reference path='../../typings/tsd.d.ts' />
/// <reference path='typings.d.ts' />

var log = function(x){ throw new Error('Not Loaded Yet')};

class BusyCtrllr{
    static  $inject = ['$scope', '$q', '$timeout', 'busyService', 'slowThing'];
    constructor($scope, $q, $timeout, busyService, slowThing){
        $scope.slowThing = slowThing;

        $scope.takingTooLong = false;

        $scope.cancelLongRunningTask = (x?)=> {
            log('Nothing to Cancel');
        };

        $scope.toogleBusy = (busy)=> {
            $scope.cancelLongRunningTask = (busy)=> {
                busyService.setBusy(busy, 1000).then(()=> {
                    $scope.busyDone = true;
                });
            };
            $scope.cancelLongRunningTask(busy);
        };

        var longTask:()=> IDeferred = ()=> {
            var deferred = $q.defer();
            $timeout(()=> {
                deferred.resolve(true)
            }, 6000);
            return deferred;
        };

        var enableCancellationOfLongRunningTask =(deferred)=> {
            $scope.cancelLongRunningTask = ()=> {
                deferred.reject(new Error('User can\'t wait'));
            };
            $scope.takingTooLong = true;
        };

        var setBusyAndWaitForConfig =  {
            onTimeOut: enableCancellationOfLongRunningTask,
            timeOut: 3000,
            keepWaiting: true
        };

        var onLongRunningTaskCompleted = ()=> {
            $scope.takingTooLong = false;
            $scope.busyDone = true;
        };

        $scope.setBusyAndWaitFor = ()=> {
            $scope.cancelLongRunningTask = null;
            busyService.setBusyAndWaitFor(longTask(),setBusyAndWaitForConfig)
                .then(onLongRunningTaskCompleted)
        };
    }
}

define(['app/helpers/quickAndDirtyLogger'],(logger)=>{
    log = logger;
    return BusyCtrllr;
});