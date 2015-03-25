angular.module('attendanceApplication')

  .controller('HomeController',['$scope','$rootScope','$http','courseDetailsService','$location', function ($scope,$rootScope,$http,courseDetailsService,$location) {
    $scope.course = {
      id:""
    };

    $scope.query = function(course){
      $http.post('/courseid',course).success(function(res){
        courseDetailsService.setCourseDetails(res.data);
        $location.path('attendance');
        
        

      });
    };
    
    
  }]);