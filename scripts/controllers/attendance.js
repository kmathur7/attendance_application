angular.module('attendanceApplication')

	.controller('AttendanceController',['$scope','$rootScope','courseDetailsService', function ($scope,$rootScope,courseDetailsService) {
    $scope.course = {};
    console.log("Hi");
    $scope.course= courseDetailsService.getCourseDetails();
    $scope.$on('course',function(event){
      console.log("hello");
      $scope.course= courseDetailsService.getCourseDetails();
      console.log($scope.course);
    })

  }]);