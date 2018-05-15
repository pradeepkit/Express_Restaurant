angular.module('myApp').controller('about_usCtrl',[
  '$anchorScroll',
  '$scope',
  '$http',
  'prefix_url', function($anchorScroll,$scope,$http,prefix_url){
	$anchorScroll();
	$http.get(prefix_url + 'members').then(function(data){
		$scope.members = data.data;
	}, function(err){
		console.log(err);
	})

	$http.get(prefix_url + 'services').then(function(data){
		$scope.services = data.data;
	}, function(err){
		console.log(err);
	})
}])