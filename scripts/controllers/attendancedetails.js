angular.module('attendanceApplication')

	.controller('AttendanceDetailsController',['$scope','courseDetailsService', function ($scope,courseDetailsService) {
  
      $scope.course= courseDetailsService.getCourseDetails();
      
    

  $scope.participant = {
    empid : 673856,
    name : "Jhonson Thomas",
    desgn : "ASE",
    project: "PWC",
    email: "jhonson.thomas1@tcs.com",
    mobile: 9876543210,
    d1: true,
    d2: true,
    d3: true,
    d4: false,
    d5: false

  };
    
  

    
  }]);