angular.module('attendanceApplication')

	.controller('AttendanceDetailsController',['$scope', function ($scope) {
  $scope.course = {
    code : "00493172",
    title : "DESS: Angular JS - Beginner - ILT",
    centre : "Pune",
    venue: "A1 TR5",
    startdate:"2015-02-09",
    enddate:"2015-02-13",
    days: 5    
    };

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
    
    $scope.getduration= function(){
      date1 = new Date ($scope.course.startdate).getTime();
      date2 = new Date ($scope.course.enddate).getTime();
      var diff = date2 - date1;
      date = new Date (diff);
      return date;
    };

    
  }]);