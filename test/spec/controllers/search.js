'use strict';

describe('Controller: SearchCtrl', function () {


  // load the controller's module
  beforeEach(module('protokollenApp'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('should have a SearchCtrl controller', function() {
    expect(scope.foo).toBe('bar');
  });

});