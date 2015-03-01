/* jasmine specs for controllers go here */


  describe('HomeController', function(){

    beforeEach(module('attendenceApplication'));

    it('should check if initial values of course variable are empty', inject(function($controller) {
    	var scope = {},
        ctrl = $controller('HomeController', {$scope:scope});
		expect(scope.course.id).toBe("");
		expect(scope.course.name).toBe("");
		expect(scope.course.facultyname).toBe("");
		expect(scope.course.startdate).toBe("");
		expect(scope.course.enddate).toBe("");
    }));
   

  });
