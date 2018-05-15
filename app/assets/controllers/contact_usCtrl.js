angular.module('myApp').controller('contact_usCtrl', [
 '$anchorScroll',
 '$scope',
 'prefix_url',
 '$http', function($anchorScroll,$scope,prefix_url,$http){
   $anchorScroll();
   $scope.sendFeedback = function(data){
	data.date = new Date();
    $http.post(prefix_url + 'feedback', data).then(function(data){
     alert('Received Feedback! Thank you for precious time to send us feedback.');
       $scope.feedbackData = {};
       $anchorScroll();
    }, function(err){
      console.log(err);
    })
   }
}])