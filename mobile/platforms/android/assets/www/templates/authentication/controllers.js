appControllers
	.controller('LoginCtrl', function($rootScope, $scope, $state, $mdToast, $ionicPopup, $auth, Eventservices, Event, User) {

		$scope.authenticate = function(provider) {
			$auth.authenticate(provider)
				.then(function(response) {

					$scope.user = User.new();

					User.create([{
							serverID: response.data.user._id,
							token: response.data.token,
							displayName: response.data.user.displayName,
							picture: response.data.user.picture,
							firstName: '',
							lastName: '',
							telephone: '0679956247',
							email: response.data.user.email,
							createDate: Date.now(),
							age: 21
						}])
						.then(function(users) {
							console.log('User inserted : ' + JSON.stringify(users));
							$rootScope.user = users[0];
						})
						.catch(function(error) {
							console.log(error.message);
						});
					$state.go('app.home');
					$mdToast.show({
						controller: 'toastController',
						templateUrl: 'toast.html',
						hideDelay: 3000,
						position: 'top',
						locals: {
							displayOption: {
								title: 'Your phone is activated!'
							}
						}
					});
					// $ionicPopup.alert({
					//   title: 'Success',
					//   content: 'Your phone is activated!'
					// });
					$rootScope.appSettings.authProvider = provider;
					$scope.activatePhone();
				})
				.catch(function(response) {
					$ionicPopup.alert({
						title: 'Error',
						content: response.data ? response.data || response.data.message : JSON.stringify(response)
					});

				});
		};

		$scope.activatePhone = function() {
			$rootScope.appSettings.phoneActivated = 'true';
			$rootScope.appSettings.save();
			Event.findById(1).then(function(event) {
				Eventservices.launch(event);
			})
		}

		$scope.logout = function() {
			$auth.logout();
		};

		$scope.isAuthenticated = function() {
			return $auth.isAuthenticated();
		};
	});