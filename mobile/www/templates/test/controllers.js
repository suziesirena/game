appControllers.controller('testCtrl',
	function($rootScope, $scope, $state, $mdToast, $ionicModal, sound, $ngData, $cordovaSQLite, db, Eventservices, User, PNJ, Event) {

		$scope.var1 = PNJ;

		$scope.test1 = function() {

			Event.findById(1).then(function(event) {
				Eventservices.launch(event);
			})

		};

		$scope.test2 = function() {
			$state.go('app.messages')
		};

		$scope.test3 = function() {}

		$scope.populateData = function() {
			populateData($ngData);

		}


		$scope.openModal = function() {
			$scope.modal.show();
		}

		$scope.closeModal = function() {
			$scope.modal.hide();
		}


		$ionicModal.fromTemplateUrl('templates/about.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			// if (true){
			//   $scope.openModal();
			// }
		});
	});