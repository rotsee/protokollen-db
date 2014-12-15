'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the protokollenApp
 */


angular.module('protokollenApp')
	.factory('currentQuery', function($rootScope) {
		var service = {};
		service.values = {};
		service.set = function(key, value) {
			service.values[key] = value;
			$rootScope.$broadcast("valuesUpdated", key, value);
			console.log("service update values", key, value);
		}
		service.get = function(key) {
			return service.values[key];
		};
		return service;
	});
angular.module('protokollenApp').controller('SearchCtrl', ['$scope', '$routeParams', 'currentQuery',
		function ($scope, $routeParams, currentQuery) {
			// Get search parameters from route or use default values
			currentQuery.set('from', $routeParams.from || '2010-01-01');
			currentQuery.set('to', $routeParams.to || '2015-01-01');
/*			$scope.daterange = {
				from: currentQuery.get('from'),
				to: currentQuery.get('to')
			};
			$scope.$watch('daterange.from', function(newValue) {
				console.log(newValue);
				currentQuery.set('from', $scope.daterange.from);
			})
			$scope.$on('valuesUpdated', function() {
				console.log("update values");
				$scope.daterange.from = currentQuery.from;
				$scope.daterange.to = currentQuery.to;
			})*/
		}
	]);
