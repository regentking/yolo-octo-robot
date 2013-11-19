'use strict';

var app = angular.module('yoloOctoRobotApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])

// inital configuration settings
app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: "/"
    })
  }])
