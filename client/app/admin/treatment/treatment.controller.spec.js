'use strict';

describe('Controller: AdminTreatmentCtrl', function () {

  // load the controller's module
  beforeEach(module('feetClinicApp'));

  var AdminTreatmentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminTreatmentCtrl = $controller('AdminTreatmentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
