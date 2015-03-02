angular.module('attendanceApplication')

	.controller('HomeController',['$scope', function ($scope) {
  	$scope.courseid = "";

    $scope.query = function(id){
      if(id==123){
        $scope.message = "123";
      }
      else{
        $scope.message = "Invalid Course ID";
      }
    };
  	$scope.newcourse = true;
  	
  }]);