'use strict';

/**
 * @ngdoc overview
 * @name protokollenApp
 * @description
 * # protokollenApp
 *
 * Main module of the application.
 */
var app = angular
  .module('protokollenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'elasticui',
    'ui.bootstrap'
  ])
  .constant('euiHost', 'http://localhost:1510') // Url to Elastic search
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/search/:from?/:to?', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/document/:id', {
        templateUrl: 'views/document.html',
        controller: 'DocumentCtrl'
      })
      .when('/meetings', {
        templateUrl: 'views/meetings.html',
        controller: 'MeetingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
