angular.module('myApp').controller('blog_detailCtrl', [
 '$routeParams',
 '$scope',
 '$http',
 'prefix_url',
 '$anchorScroll', function($routeParams,$scope,$http,prefix_url,$anchorScroll){
   $anchorScroll();
   $scope.index = $routeParams.id - 1;
   $http.get(prefix_url + 'blogs').then(function(data){
	 $scope.blogs = data.data;
	 $http.get(prefix_url + 'comments/' + $scope.blogs[$scope.index].id)
	   .then(function(data){
		 $scope.comments = data.data;
		}, function(err){
		  console.log(err);
		})
   }, function(err){
	  console.log(err);
   })

   $scope.postComment = function(data){
	 var comment = angular.copy(data);
	 comment.image = 'data:' + data.image[0].filetype + ';base64,' + data.image[0].base64;
	 comment.date = new Date();
	 comment.blog_id = $scope.blogs[$scope.index].id;
	 $http.post(prefix_url+'comments/'+$scope.blogs[$scope.index].id,comment)
	  .then(function(data){
	    $scope.comments = data.data;
		$scope.commentData = {};
		  console.log(data);
		}, function(err){
		  console.log(err);
		})
	}
}])