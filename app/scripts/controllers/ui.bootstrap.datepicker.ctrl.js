angular.module('protokollenApp')
.controller('DaterangeCtrl', function ($scope, $attrs) {
  $scope.model = {};
  $scope.model.from = $scope.$parent.from || '2010-01-01'; 
  $scope.model.to = $scope.$parent.to || '2014-01-01'; 
})

angular.module('protokollenApp')
.controller('DatepickerCtrl', function ($scope, $attrs) {
  // Define a custom model, eg. "from" or "to"
  $scope._model = $attrs.model || 'dt';

  // The starting date can be set with an attribute "date" 
  $scope.model[$scope._model] = $scope.$parent.model[$scope._model] || new Date();


  $scope.today = function() {
    $scope.model[$scope._model] = new Date();
  };

  $scope.clear = function () {
    $scope.model[$scope._model] = null;
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  // Set date format
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[1];
});