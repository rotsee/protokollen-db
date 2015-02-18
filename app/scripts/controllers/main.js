'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the protokollenApp
 */
angular.module('protokollenApp')
  .controller('MainCtrl', function ($scope, $location) {
  	$scope.$on('search', function(scope) {
  		var keyword = scope.targetScope.querystring
  		$location.path('/search/2010-01-01/2015-01-01/' + keyword);
  	});
});
