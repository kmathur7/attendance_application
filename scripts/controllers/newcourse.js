angular.module('attendanceApplication')

	.controller('NewCourseController',['$scope','$http', function ($scope,$http) {
 	
 		$scope.show = function(){
 			var coursedata = $scope.course;
 			$http.post('/newcourse',coursedata).success(function(res){
        $scope.message=res;
      });
 		}

    

    
  }]);