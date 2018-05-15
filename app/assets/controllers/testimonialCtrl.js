angular.module('myApp').controller('testimonialCtrl', [
	'$anchorScroll',
	'$scope',
	'$http', 
	'prefix_url', function($anchorScroll,$scope, $http, prefix_url){
	  $anchorScroll();
	  $http.get(prefix_url + 'testimonials').then(function(data){
		$scope.testimonials = data.data;
	  }, function(err){
		console.log(err);
	  })
}])