angular.module('attendanceApplication',['ngRoute'])

	.config(function ($routeProvider) {
    	$routeProvider
    	.when('/', {
        	templateUrl: 'views/home.html',
        	controller: 'HomeController'
      	})
      .when('/attendance', {
          templateUrl: 'views/attendance.html',
          controller: 'AttendanceController'
        })
      .when('/login', {
          templateUrl: 'views/signin.html'
        })
      .when('/attendancedetails', {
          templateUrl: 'views/attendancedetails.html',
          controller: 'AttendanceDetailsController'
        })
      .otherwise({
        	redirectTo: '/'
      	});
  });