'use strict';
var myApp = angular.module('myApp', ['ngRoute','naif.base64'])
 //.value('prefix_url','http://restaurant-express-server.herokuapp.com/api/')
//  .value('prefix_url','https://my-express-restaurant.herokuapp.com/api/')
 .value('prefix_url','https://express-restaurant.onrender.com')
 

  .config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', {
        cache : true,
        templateUrl : 'templates/home.html',
        controller : 'homeCtrl'
    })
    .when('/about-us', {
        cache : true,
        templateUrl : 'templates/about_us.html',
        controller : 'about_usCtrl'
    })
    .when('/blog-details/:id', {
        cache : true,
        templateUrl : 'templates/blog_details.html',
        controller : 'blog_detailCtrl'
    })
    .when('/contact-us', {
        cache : true,
        templateUrl : 'templates/contact_us.html',
        controller : 'contact_usCtrl'
    })
    .when('/our-blog', {
        cache : true,
        templateUrl : 'templates/our_blog.html',
        controller : 'our_blogCtrl'
    })
    .when('/our-gallery', {
        cache : true,
        templateUrl : 'templates/our_gallery.html',
        controller : 'our_galleryCtrl'
    })
    .when('/our-menu', {
        cache : true,
        templateUrl : 'templates/our_menu.html',
        controller : 'our_menuCtrl'
    })
    .when('/reservation', {
        cache : true,
        templateUrl : 'templates/reservation.html',
        controller : 'reservationCtrl'
    })
    .when('/shopping-cart', {
        cache : true,
        templateUrl : 'templates/shopping_cart.html',
        controller : 'shopping_cartCtrl'
    })
    .when('/testimonials', {
        cache : true,
        templateUrl : 'templates/testimonials.html',
        controller : 'testimonialCtrl'
    })
    .when('/:ref_id/confirmation/:type', {
        cache : true,
        templateUrl : 'templates/confirmation.html',
        controller : 'confirmationCtrl'
    })
    .otherwise({redirectTo : '/home'});

    $locationProvider.html5Mode(true);

  }])

.controller('mainCtrl', ['$anchorScroll',
    '$scope',
    '$http',
    'prefix_url',
    'RestaurantService',
    '$rootScope', function($anchorScroll,$scope,$http,prefix_url,RestaurantService,$rootScope){
      $scope.length = RestaurantService.cart.length;
      $scope.subscribeNewsletter = function(data){
        data.date = new Date();
        $http.post(prefix_url + 'newsletter', data).then(function(data){
            alert('Success! You have subscribed with our Newsletter Service. ')
            $scope.feedbackData = {};
            $anchorScroll();
        }, function(err){
            console.log(err);
        })
      };

      $rootScope.$on('badgeUpdate', function(event, data) {
        $scope.length = data;
        console.log('badge');
      });
}])

.factory('RestaurantService', function() {
    let recipeItems = [
        {
			name : 'Fryied Rice',
			image : 'assets/images/our-menu/01.jpg',
			rating : '4',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Dal Chawal',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Chiken Rice',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Motton Rice',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'sof drink',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Chhole Bhatore',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'palak pameer',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 150,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Matar paneer',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 150,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Saahi paneer',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 150,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bread pizza',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Chese Burgure',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Veg Burgure',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Daal',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Rice',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Biriyani',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Momose',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Aalu Paratha',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 20,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Sada Paratha',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 15,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/01.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/02.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'breakfast'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/03.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'lunch'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/04.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'dinner'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/05.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'drinks'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/06.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/07.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'all'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/08.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		},
        {
			name : 'Bhojan',
			image : 'assets/images/our-menu/09.jpg',
			rating : '5',
			number : 6,
			price : 50,
			description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur placerat nulla,',
			type : 'others'
		}
        
    ] 
    return {
        cart : [],
        recipes : recipeItems
    }
})

.filter('capitalize', function() {
  return function(input) {
   return (typeof input === 'number') ? input : input.split('_').join(' ').toUpperCase();
  }
})

.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
    }])

.directive('ngRepeatOwlCarousel', function() {
    return {
      restrict: 'A',
      scope: {
        carouselInit: '&'
      },
      link: function(scope, element, attrs) {
        if ((scope.$parent != null) && scope.$parent.$last) {
          return scope.carouselInit()();
        }
      }
    };
});