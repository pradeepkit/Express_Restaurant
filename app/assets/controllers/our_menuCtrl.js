angular.module('myApp').controller('our_menuCtrl', [
	'$anchorScroll',
	'$scope',
	'RestaurantService',
	'$http',
	'prefix_url',
	'$rootScope', function($anchorScroll,$scope,RestaurantService,$http,prefix_url,$rootScope){
	$anchorScroll();
	$scope.filter = 'all';
	console.log('RestaurantService.recipes', RestaurantService.recipes);
	// if(!RestaurantService.recipes.length){
	// 	$http.get(prefix_url + 'menu').then(function(data){
	// 		$scope.recipes = data.data;
	// 		RestaurantService.recipes = data.data;
	// 	}, function(err){
	// 		console.log(err);
	// 	})
	// }else{
		$scope.recipes = RestaurantService.recipes
	// }

	$scope.addToCart = function(data, index){
		if(!data.checked){
			RestaurantService.cart.push({
			name : data.name,
			image : data.image,
			rating : data.rating,
			number : data.number,
			price : data.price,
			description : data.description,
			type : data.type
			});
			$rootScope.$emit('badgeUpdate', RestaurantService.cart.length);
			alert(`"${data.name}" is added to your Cart!`);
			$scope.recipes[index].checked = true;
			return true;
		}else{
			RestaurantService.cart.splice(index,1);
			RestaurantService.recipes[index].checked = false;
			$scope.recipes = RestaurantService.recipes;
			$rootScope.$emit('badgeUpdate', RestaurantService.cart.length);
			alert(`"${data.name}" is removed from your Cart!`);
			return true;
		}
	}

	$scope.carouselInit = function() {
		/*dish script code start here*/
		$('.dish').owlCarousel({
			items: 5,
			itemsDesktop : [1199, 3],
			itemsDesktopSmall : [979, 3],
			itemsTablet : [768, 1],
			itemsMobile : [479, 1],
			navigation : false,
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem : false,
			navigationText: ['<i class="fa fa-angle-double-left fa1"></i>', '<i class="fa fa-angle-double-right fa2"></i>'],
			pagination: false,
		});
		/*dish script code end here*/
	};

	$scope.switch = function(value, data, index){
		var bool = $scope.addToCart(data,index)
		if(bool){
			return (value) ? $scope.recipes[index].checked = false : $scope.recipes[index].checked = true
		}
	}
}])