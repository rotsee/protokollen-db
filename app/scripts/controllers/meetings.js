'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:MeetingsCtrl
 * @description
 * # MeetingsCtrl
 * Controller of the protokollenApp
 */
angular.module('protokollenApp')
  .controller('MeetingsCtrl', function ($scope, es, MeetingDocuments, $location) {

    // When a meeting is clicked fetch and show related documents
    $scope.clickMeeting = function(origin, meeting_date) {
    	MeetingDocuments.get({ 
    		origin: origin,
    		meeting_date: new Date(meeting_date)
    	}).then(function(doc) {
            var id = doc[0]._id;
            $location.path('/document/' + id);
    	});
    }
  });
