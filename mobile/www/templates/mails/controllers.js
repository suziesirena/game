appControllers
	.controller('mailsCtrl', function($rootScope, $scope, $state, $sce, Mail) {

		$scope.$on('$ionicView.enter', function() {
			if (!$scope.mails) {
				Mail.find().then(function(mails) {
					$scope.mails = mails;
				})
			}
		});

		$scope.navigateTo = function(targetPage, objectData) {
			$state.go(targetPage, {
				data: objectData
			});
		};
	})
	.controller('mailCtrl', function($rootScope, $scope, $stateParams, $state, $sce, Eventservices, Event) {

		// $scope.$on('$state.beforeEnter', function() {
		var mail = $stateParams.data;
		if (mail) {
			$scope.mail = mail;
			if (mail.read != 'read') {
				$rootScope.appSettings.unreadMails--;
				$rootScope.appSettings.save();

				if (mail.nextEventID) {
					Event.findOne({
						id: mail.nextEventID
					}).then(function(event) {
						Eventservices.launch(event);
					})
				}

				$scope.mail.read = 'read';
				$scope.mail.save();
			}

			$scope.mailContent = $sce.trustAsHtml(mail.content);

		} else {
			$state.go('app.mails');
		}
		// });
	})