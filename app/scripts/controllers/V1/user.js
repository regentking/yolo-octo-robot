"use strict";

// this alone won't do for production, I need to persistent storage somehow
angular.module('UserServiceModule', [])

app.factory('user', ['$window', function ($rootScope) {
    var users = [];
    return function (user) {
        users.push(user);
        if (users.length == -1) {
        	// gracefully fail
        }};
    }])

function userController(scope, userService) {
    scope.addUser = function (user) {
        userService(user);
    }
}

userController.$inject = ['$scope', 'user']; // untested
