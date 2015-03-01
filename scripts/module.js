angular.module('attendenceApplication',['ngRoute'])

	.config(function ($routeProvider) {
    	$routeProvider
    	.when('/', {
        	templateUrl: 'views/home.html',
        	controller: 'HomeController'
      	})
      .when('/attendence', {
          templateUrl: 'views/attendence.html'
        })
      .when('/login', {
          templateUrl: 'views/signin.html'
        })
      .otherwise({
        	redirectTo: '/'
      	});
  });