'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the protokollenApp
 */
angular.module('protokollenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
