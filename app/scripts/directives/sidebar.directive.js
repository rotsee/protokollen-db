// Sidebar rendering directive
// Takes a name and passes a url to a template file with the content of the sidebar
app.directive('sidebar', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
          name: '@name',
        },
        template: '<div>\
  <nav id="mobileSidebar" class="navmenu navmenu-default navmenu-fixed-left offcanvas" role="navigation" ng-include=src>\
  </nav>\
  <button type="button"data-toggle="offcanvas" data-target="#mobileSidebar" data-canvas="body" class="visible-xs">Toggle sidebar</button>\
  <div class="col-sm-4 hidden-xs">\
    <div ng-include=src></div>\
  </div>\
</div>',
        //templateUrl: 'templates/sidebar.template.html',
        controller: ['$scope', '$element', '$attrs',
          function ($scope, $element, $attrs) {
            // The sidebar templates have to follow the same naming pattern
            $scope.src = 'templates/' + $scope.name + '.sidebar.template.html';
          }
        ]
    }
});