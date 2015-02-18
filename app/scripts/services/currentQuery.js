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