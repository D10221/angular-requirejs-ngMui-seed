//Angular
declare module Angular{
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
}