angular.module('protokollenApp')
// The date range controller stores a date range for filtering
.controller('DaterangeCtrl', function ($scope, currentQuery) {
    $scope.daterange = {};
    $scope.daterange.from = currentQuery.get('from');
    $scope.daterange.to = currentQuery.get('to');

    // currentQuery will signal when dates are updated 
    $scope.$on('valuesUpdated', function($parent, key) {
      $scope.daterange[key] = currentQuery.get(key);
    })
})
// Controller for the current search url element
.controller('SearchUrlCtrl', function ($scope, currentQuery) {
  $scope.$on('valuesUpdated', function($parent, key) {
    $scope.from = currentQuery.get('from');
    $scope.to = currentQuery.get('to');
  });
});

// The controller of a single datepicker (from Bootstrap UI)
angular.module('protokollenApp')
.controller('DatepickerCtrl', function ($scope, $attrs, currentQuery) {
  // Define a custom model, eg. "from" or "to"
  var key = $attrs.key || 'dt';
  $scope.daterange = {};

  // Get starting dates from currentQuery service servie
  $scope.daterange[key] = currentQuery.get(key) || new Date();

  // Update currentQuery service when field changes
  var keyString = 'daterange.' + key;
  $scope.$watch(keyString, function() {
    currentQuery.set(key, $scope.daterange[key]);
    $scope.daterange[key]
  }, true);

  // Get current date
  $scope.today = function() {
    $scope.daterange[key] = new Date();
  };

  $scope.clear = function () {
    $scope.daterange[key] = null;
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