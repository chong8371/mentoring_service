'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('MentoringServiceApp.controllers'));


  it('should ....', inject(function($controller) {
    //spec body
    var loginCtrl = $controller('loginCtrl', { $scope: {} });
    expect(loginCtrl).toBeDefined();
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var signupCtrl = $controller('signupCtrl', { $scope: {} });
    expect(signupCtrl).toBeDefined();
  }));
});
