'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the protokollenApp
 */

// SERVICE: Store the current search parameters (dates, keyword etc) centrally
// so that various controllers on the page can access them
angular.module('protokollenApp')
	.factory('currentQuery', function($rootScope) {
		var service = {};
		service.values = {};

		// Update parameter
		service.set = function(key, value) {
			service.values[key] = value;
			$rootScope.$broadcast("valuesUpdated", key, value);
		}

		// Request a specific parameter
		service.get = function(key) {
			return service.values[key];
		};
		return service;
	});

// The search controller picks up route parameters and inits the 
// currentQuery service
angular.module('protokollenApp').controller('SearchCtrl', ['$scope', '$routeParams', 'currentQuery',
	function ($scope, $routeParams, currentQuery) {
		// Get search parameters from route or use default values
		currentQuery.set('from', $routeParams.from || '2010-01-01');
		currentQuery.set('to', $routeParams.to || '2015-01-01');
		currentQuery.set('keyword', $routeParams.keyword || '');
		$scope.foo = 'bar';
	}
]);
