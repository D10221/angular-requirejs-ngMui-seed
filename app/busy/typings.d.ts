/// <reference path='../../typings/tsd.d.ts' />
interface IPromise extends ng.IPromise<any> {

}

interface IDeferred extends ng.IDeferred<any> {

}
interface IWaitForConfig {
    timeOut:number;
    onTimeOut:(deferred:IDeferred)=>void;
    keepWaiting:boolean;
}