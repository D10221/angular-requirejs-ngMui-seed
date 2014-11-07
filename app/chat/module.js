'use strict';
define(['angular','app/chat/ChatRoom'],function(angular,ChatRoom){
    return angular.module('app.chat',[]).service('chatRoom',ChatRoom);
});