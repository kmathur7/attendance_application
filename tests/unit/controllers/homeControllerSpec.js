/* jasmine specs for controllers go here */


  describe('HomeController', function(){

    beforeEach(module('attendenceApplication'));

    it('should check initial course value to be AngularJS', inject(function($controller) {
      var scope = {},
          ctrl = $controller('HomeController', {$scope:scope});

      expect(scope.course).toBe("AngularJS");
    }));

  });
