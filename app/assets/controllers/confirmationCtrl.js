angular.module('myApp').controller('confirmationCtrl', [
	'$anchorScroll',
	'$scope',
	'$routeParams',
	'$http',
	'prefix_url', function($anchorScroll,$scope, $routeParams,$http,prefix_url){
	$anchorScroll();
	$scope.type = $routeParams.type;
	if($scope.type == "order"){
		$http.get(prefix_url + 'order/' + $routeParams.ref_id)
		  .then(function(data){
				$scope.orderData = data.data[0];
			}, function(err){
				console.log(err);
			})
	}else if(flag == "reservation"){
		$http.get(prefix_url + 'reservation/' + $routeParams.ref_id)
		  .then(function(data){
				$scope.reservationData = data.data;
			}, function(err){
				console.log(err);
			})
	}
		
	$scope.navigation = function(flag){
		if(flag == 0){
		$location.path('/home');
		}
	}
}])