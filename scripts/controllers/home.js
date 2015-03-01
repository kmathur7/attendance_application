angular.module('attendenceApplication')

	.controller('HomeController',['$scope', function ($scope) {
  	$scope.course= {
  		id : "",
  		name:"",
  		facultyname:"",
  		startdate:"",
  		enddate:""
  	};

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