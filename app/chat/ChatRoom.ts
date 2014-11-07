/// <reference path='../../typings/tsd.d.ts' />
/// <reference path='typings.d.ts' />

class ChatRoom{
    chatUsers:IChatUser[];
    static $inject =['$http'];
    constructor($http:ng.IHttpService){
        $http.get('data/chat-users.json').then(
            payload =>{
                this.chatUsers = <IChatUser[]>payload.data;
            }
        )
    }
}

define([],()=>{
    return ChatRoom;
});