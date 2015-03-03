angular.module('attendanceApplication')

	.controller('AttendanceController',['$scope', function ($scope) {
  $scope.course = {
    code : "00493172",
    title : "DESS: Angular JS - Beginner - ILT",
    centre : "Pune",
    venue: "A1 TR5",
    startdate:"2015-02-09",
    enddate:"2015-02-13",
    days: 5    
    };

    $scope.hidecoursedatails = false;

    $scope.test = function(){
      console.log($scope.empid);
    };

    $scope.getduration= function(){

      date1 = new Date ($scope.course.startdate).getTime();
      date2 = new Date ($scope.course.enddate).getTime();

     
      var diff = date2 - date1;
      console.log(diff);
      date = new Date (diff);

      return date;
    };

    
  }]);