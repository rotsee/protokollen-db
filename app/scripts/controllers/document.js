'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:DocumentCtrl
 * @description
 * # DocumentCtrl
 * Controller of the protokollenApp
 */
angular.module('protokollenApp')
	.controller('DocumentCtrl', ['$scope', '$routeParams', 'es',
		function ($scope, $routeParams, es) {
			$scope.showDocument = false;

			// Get document by id
			var request = ejs.Request().query(ejs.IdsQuery($routeParams.id));
			// Make query
			var res = es.client.search({
				index: 'documents',
				size: 1,
				from: 0,
				body: request
			}).then(function (response) {
				// Successful ajax request
				$scope.showDocument = true;
				
				// Make sure that we found document with matching id
				if (response.hits.hits.length > 0) {
					// Show document
					$scope.success = true;
					$scope.document = response.hits.hits[0];
				}
				else {
					// Failed to find document with this id
					$scope.success = false;
				}
	    }, function(err) {
	    	// Something went wrong in ajax request
	    	console.trace(err.message);
	    });
  	}
  ]);
