'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the protokollenApp
 */
angular.module('protokollenApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
