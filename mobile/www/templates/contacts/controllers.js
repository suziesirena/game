appControllers

.controller('contactListCtrl', function ($rootScope, $scope, $state, $mdToast, PNJ) {

    $scope.allContacts = function() {
      PNJ.find().then(function(pnjs){
        $scope.contacts = pnjs;
      })
    }
    $scope.allContacts();

    $rootScope.$on('$stateChangeStart',function(){
      if (!$scope.contacts) {
        $scope.allContacts();
      }
    });

    $scope.navigateTo = function (targetPage, objectData) {
      $state.go(targetPage, {
          contactdetail: objectData,
      });
    };

    $scope.call = function(objectData) {
      if ($rootScope.firstUse === 'true') {
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

      } else {

      }
    }

})

.controller('contactDetailCtrl', function($scope, $stateParams) {
    $scope.contact = $stateParams.contactdetail;
})
