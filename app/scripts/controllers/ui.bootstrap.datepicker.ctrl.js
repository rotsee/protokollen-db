angular.module('protokollenApp')
.controller('DaterangeCtrl', function ($scope, currentQuery) {

})
.controller('SearchUrlCtrl', function ($scope, currentQuery) {
  $scope.$on('valuesUpdated', function($parent, key) {
    $scope.from = currentQuery.get('from');
    $scope.to = currentQuery.get('to');
  });
});

angular.module('protokollenApp')
.controller('DatepickerCtrl', function ($scope, $attrs, currentQuery) {
  // Define a custom model, eg. "from" or "to"
  var key = $attrs.key || 'dt';
  $scope.daterange = {};
  // The starting date from parent from/to or set current date as default
  $scope.daterange[key] = currentQuery.get(key) || new Date();

  var keyString = 'daterange.' + key;
  $scope.$watch(keyString, function() {
    currentQuery.set(key, $scope.daterange[key]);
  }, true);

  $scope.$on('valuesUpdated', function($parent, key) {
    $scope.daterange[key] = currentQuery.get(key);
  })


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