/// <reference path='../../typings/tsd.d.ts' />

class SidebarCtroller{
    static $inject =['$scope','chatRoom'];
    constructor($scope,chatRoom){
        $scope.chatRoom = chatRoom;
    }
}

define([],()=>{
    return SidebarCtroller;
});