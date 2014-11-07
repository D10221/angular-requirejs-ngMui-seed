/// <reference path='../../typings/tsd.d.ts'/>
define([],()=>{
    function log(who,template:string, parameters:{}) {
        for (var p in parameters) {
            template = template.replace(new RegExp('@' + p), parameters[p]);
        }
        console.log((who.name|| 'anonymous') + ":" + template);

    }
    return log;
});