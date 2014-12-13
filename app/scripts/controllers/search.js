'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the protokollenApp
 */
angular.module('protokollenApp')
  .controller('SearchCtrl', ['$scope', '$routeParams',
		function ($scope, $routeParams) {
			// Get search parameters from route or use default values
			$scope.from = angular.isDefined($routeParams.from) ? $routeParams.from : '2010-01-01';
			$scope.to = angular.isDefined($routeParams.to) ? $routeParams.to : '2014-01-01';
			$scope.origin = angular.isDefined($routeParams.origin) ? $routeParams.origin : 'all';
		}
	]);
