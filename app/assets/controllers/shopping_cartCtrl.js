angular.module('myApp').controller('shopping_cartCtrl', [
	'$anchorScroll',
	'$scope',
	'RestaurantService',
	'$http',
	'prefix_url',
	'$anchorScroll',
	'$location',
	'$rootScope', function($anchorScroll,$scope,RestaurantService,$http,prefix_url,$anchorScroll,$location,$rootScope){
	  $anchorScroll();
	  $scope.order = {
		date : new Date(),
		total_amount : 0,
		products : RestaurantService.cart,
		address_details : {},
		contact_details : {},
		card_details : {}
	  }
	  $scope.order.card_details.cart_type = 'Visa Card';
	  $scope.filter = '1';

	  $scope.next = function(flag){
		if(flag == 0){
			$scope.filter = '1';
			$anchorScroll();
		}else if(flag == 1){
			$scope.filter = '2';
			$anchorScroll();
		}else if(flag == 2){
			$scope.filter = '3';
			$anchorScroll();
		}
	  };

	  $scope.$watch('order.products', function(oldValue, newValue){
		var total_amount = 0;
		angular.forEach($scope.order.products, function(item){
			total_amount += item.price*item.number;
			$scope.order.total_amount = total_amount;
		})
	  }, true)

	  $scope.takeOrder = function(data){
		var name = data.contact_details.first_name + ' ' + data.contact_details.last_name;
		$http.post(prefix_url + 'order', data).then(function(data){
			RestaurantService.cart = [];
			RestaurantService.recipes = [];
			$location.path('/' + data.data.ref_id + '/confirmation/order'); 
		}, function(err){
			alert('Error! Try after some time.')
		})
	  }

	  $scope.removeFromCart = function(index){
		index = RestaurantService.cart.length - index - 1;
		var name = RestaurantService.cart[index].name;
		RestaurantService.cart.splice(index,1);
		RestaurantService.recipes[index].checked = false;
		$scope.order.products = RestaurantService.cart;
		$scope.$apply();
		$rootScope.$emit('badgeUpdate', RestaurantService.cart.length);
		alert(`"${name}" is removed from your Cart!`);
	  }

	  $scope.navigator = function(flag){
		if(flag == 0)
			$location.path('/our-menu');
	  }
}])