angular.module('attendanceApplication')

  .controller('HomeController',['$scope','$http', function ($scope,$http) {
    $scope.course = {
      id:""
    };

    $scope.query = function(course){
      console.log(course.id);
      $http.post('/courseid',course).success(function(res){
        $scope.message=res;
      });
    };
    
    
  }]);