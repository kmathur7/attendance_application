angular.module('attendanceApplication')

	.controller('AttendanceController',['$scope','$rootScope','courseDetailsService', function ($scope,$rootScope,courseDetailsService) {
    $scope.course = {};
    console.log("Hi");
    $scope.course= courseDetailsService.getCourseDetails();
    

  }]);