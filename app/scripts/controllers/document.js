'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:DocumentCtrl
 * @description
 * # DocumentCtrl
 * Controller of the protokollenApp
 */
angular.module('protokollenApp')
	.controller('DocumentCtrl', ['$scope', '$routeParams', 'es', 'MeetingDocuments',
		function ($scope, $routeParams, es, MeetingDocuments) {
			$scope.showDocument = false;

			// Fetch document by id
			MeetingDocuments.get({ id: $routeParams.id }).then(function(resp) {
				$scope.showDocument = true;

				// Val
				if (resp.length > 0) {
					$scope.success = true;
					var doc = resp[0];
					$scope.document = doc;

					// Get other documents from this meeting
					MeetingDocuments.get({
						origin: doc._source.origin,
						meeting_date: doc._source.meeting_date
					}).then(function(resp) {
						$scope.otherDocs = resp;
					})
				}
				// Didn't find any document with this id
				else {
					$scope.success = false;
				}
			}, function(err) {
		    	// Something went wrong in ajax request
		    	console.trace(err.message);
		    })
  	}
  ]);
