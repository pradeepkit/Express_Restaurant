angular.module('myApp').controller('reservationCtrl', [
	'$anchorScroll',
	'$scope',
	'$http', 
	'prefix_url',
	'$location', function($anchorScroll,$scope,$http,prefix_url,$location){
	  $anchorScroll();
	  $scope.doReservation = function(data){
		var name = data.name;
		$http.post(prefix_url + 'reservation', data).then(function(data){
			$location.path('/' + data.data.ref_id + '/confirmation/reservation'); 
			$scope.reserveData = {
				person_count : 0
			}
		}, function(err){
			alert('Error! Try after some time.')
		})
	  }
}])