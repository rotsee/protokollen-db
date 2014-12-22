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
			var reqById = ejs.Request().query(ejs.IdsQuery($routeParams.id));

			// Make document query
			var res = es.client.search({
				index: 'documents',
				size: 1,
				from: 0,
				body: reqById
			}).then(function (response) {
				// Successful ajax request
				$scope.showDocument = true;
				
				// Make sure that we found document with matching id
				if (response.hits.hits.length > 0) {
					// Show document
					$scope.success = true;
					$scope.document = response.hits.hits[0];

					// Get other documents from same meeting
					var originFilter = ejs.TermsFilter('origin', $scope.document._source.origin);
					var dateFilter = ejs.TermsFilter('meeting_date', $scope.document._source.meeting_date);
	    		var duplicateFilter = ejs.NotFilter( ejs.IdsFilter( $scope.document._id ) );
	    		
	    		var reqOtherMeetingDocuments = 	ejs.Request()
	    			.filter( ejs.AndFilter([dateFilter, originFilter, duplicateFilter]) );
	    		var res = es.client.search({
						index: 'documents',
						size: 20,
						from: 0,
						body: reqOtherMeetingDocuments
					}).then(function(response) {
						$scope.otherDocs = response.hits.hits;
					})

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
