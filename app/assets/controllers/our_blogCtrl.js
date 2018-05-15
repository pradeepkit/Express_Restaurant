angular.module('myApp').controller('our_blogCtrl', [
	'$anchorScroll',
	'$scope',
	'$location',
	'$http',
	'prefix_url', function($anchorScroll,$scope,$location,$http, prefix_url){
		$anchorScroll();
		$http.get(prefix_url + 'blogs').then(function(data){
			$scope.blogs = data.data;
		}, function(err){
			console.log(err);
		})

		$scope.navigator = function(id){
			$location.path('/blog-details/' + id); 
		}
}])