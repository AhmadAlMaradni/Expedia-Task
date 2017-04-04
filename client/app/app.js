 angular.module('myapp',[
	'myapp.Expedia',
	'myapp.services',
	'ngRoute'
	])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'app/hotel/hotel.html',
		controller:'ExpediaContr'
	})
	 .otherwise({redirectTo:'/'});

})