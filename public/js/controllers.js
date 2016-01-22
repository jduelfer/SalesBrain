angular.module('BrainstormApp.controllers', [])

.controller('StartCtrl', function($scope, $window) {
	$scope.records = local_data;

	$scope.itemClick = function(recordId) {
		//redirect with the id
		/*obviously an angular state machine would be a much better implementation,
		but this is just a quick tutorial to test out the jsforce framework.
		*/
		$window.location.href = '/account' + '?id=' + recordId;
	};
})

.controller('NewCtrl', function($scope, $http, $location, $window) {
	$scope.account = {};
	$scope.errorMessage = '';

	$scope.submitForm = function() {
		$http.post('/new', $scope.account).
			success(function(data) {
				console.log('yaayayy');
				//redirect to contacts after post
				$window.location.href = '/accounts';
			}).error(function(err) {
				console.error(err);
			});
	};
})

.controller('ContactCtrl', function($scope) {
	$scope.account = account;
});
