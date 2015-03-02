/* jasmine specs for controllers go here */


  describe('HomeController', function(){

    beforeEach(module('attendanceApplication'));

    it('should check if initial values of course variable are empty', inject(function($controller) {
    	var scope = {},
        ctrl = $controller('HomeController', {$scope:scope});
		    expect(scope.courseid).toBe("");
		
    }));

    it('should check the return message of the query function', inject(function($controller) {
      var scope = {},
        ctrl = $controller('HomeController', {$scope:scope});
        scope.query(123);
        expect(scope.message).toBe("123");

        scope.query("asasdff");
        expect(scope.message).toBe("Invalid Course ID");

    
    }));


   

  });
