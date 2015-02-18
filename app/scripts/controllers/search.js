'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the protokollenApp
 */



// The search controller picks up route parameters and inits the 
// currentQuery service
angular.module('protokollenApp').controller('SearchCtrl', ['$scope', '$location', 'currentQuery',
	function ($scope, $location, currentQuery) {
		var querystring = $location.search();
		
		// Get search parameters from route or use default values
		currentQuery.set('from', querystring.from || '2010-01-01');
		currentQuery.set('to', querystring.to || '2015-01-01');
		currentQuery.set('keyword', querystring.keyword || '');

		// Set defult sorting
		$scope.order = 'desc';
		// Sorting options
		$scope.sortOptions = [
			{ order: 'asc', label: 'Stigande' },
			{ order: 'desc', label: 'Fallande' },
		]

		// Update sort
		$scope.sort = function() {
			this.sorting.sort = ejs.Sort('meeting_date').order(this.order);
		};
	}
]);
