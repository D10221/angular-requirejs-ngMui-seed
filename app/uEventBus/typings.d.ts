/// <reference path='../../typings/tsd.d.ts' />
interface IUEventBus {
    pub(msg:any, data:any):void;
    sub(msg:string, callback:(event:ng.IAngularEvent, args:any[]) => any, scope?: ng.IScope):void;
    takeOne(msg:string, func:()=>void, scope:ng.IScope):void;
}