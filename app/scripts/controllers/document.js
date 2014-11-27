'use strict';

/**
 * @ngdoc function
 * @name protokollenApp.controller:DocumentCtrl
 * @description
 * # DocumentCtrl
 * Controller of the protokollenApp
 */
angular.module('protokollenApp')
	.controller('DocumentCtrl', ['$scope', '$routeParams',
		function ($scope, $routeParams) {
			$scope.documentId = $routeParams.id;
  	}
  ]);
