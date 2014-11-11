/// <reference path='../typings/tsd.d.ts' />
//Angular
declare module Angular {
    export interface IRoute {
        originalPath:string;
        redirectTo:string;
        regexp:RegExp;
    }

    export interface IRouteChangeEventData {
        $$route: IRoute;
        params:{};
        pathPrams:{};
    }


    export interface IRootScope extends ng.IRootScopeService {
        //$watch(watchExpression: string, listener?: (scope: ng.IScope,newValue: any, oldValue: any) => any, objectEquality?: boolean): Function;
        //element => events, handle, angular calls jqLiteOff?
        unbind: (element:any, type?, fn?, unsupported?)=>void;
    }

    export interface IngCookie {
        set:(ket:string, value:any)=> boolean;
        add:(ket:string, value:any)=> boolean; //DEPRECATED
        get: (key:string)=> any;
        remove : (key:string)=> Boolean;
        clearAll : ()=> boolean;
    }

    export interface ILocalStorageService {
        isSupported:boolean ;
        getStorageType: string; //cookie / localStorage
        set:  (key:string, value:any)=> boolean;
        add: (key:string, value:any)=> boolean; //DEPRECATED
        get: (key:string)=> any;
        keys: ()=>string[];
        remove: (key:string)=> boolean;
        clearAll: (regex?:RegExp)=> boolean;
        bind: (scope:ng.IScope, key:string, def:any) =>void ; //def could be Object ?
        deriveKey: (key:string)=> string;
        cookie: IngCookie ;
    }

    export interface ILocalStorageServiceProvider {
        setPrefix: (key:string) => void;
    }


}