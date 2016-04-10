appControllers

  .controller('contactListCtrl', function($rootScope, $scope, $state, $mdToast, $auth, PNJ, Action) {

  $scope.allContacts = function() {
    PNJ.find().then(function(pnjs) {
      $scope.contacts = pnjs;
    })
  }
  $scope.allContacts();

  $rootScope.$on('$stateChangeStart', function() {
    if (!$scope.contacts) {
      $scope.allContacts();
    }
  });

  $scope.navigateTo = function(targetPage, objectData) {

    if (targetPage == 'app.call' || targetPage == 'app.sms') {
      if ($rootScope.appSettings.phoneActivated == 'true' && $auth.isAuthenticated()) {
        Action.findOne({
          pnjID: objectData.id
        }).then(function(results) {
          console.log(results);
          $state.go(targetPage, {
            data: objectData
          });

        }).catch(function(error) {
          console.log(error.message);
        });



      } else if ($rootScope.appSettings.phoneActivated == 'true' && !$auth.isAuthenticated()) {
        $state.go('app.login');
      } else {
        toastNotActivated();
      }
    } else {
      $state.go(targetPage, {
        data: objectData
      });
    }
  };

  function toastNotActivated() {
    $mdToast.show({
      controller: 'toastController',
      templateUrl: 'toast.html',
      hideDelay: 3000,
      position: 'top',
      locals: {
        displayOption: {
          title: "Your phone has not been activated yet. Keep on the lookout for instructions..."
        }
      }
    });
  }
})

.controller('contactDetailCtrl', function($scope, $stateParams) {
  $scope.contact = $stateParams.contactdetail;
})