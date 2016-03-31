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
      if ($rootScope.phoneActivated && (targetPage == 'app.call' || targetPage == 'app.sms'  )) {
        toastNotActivated();
      } else {
        $state.go(targetPage, {
            contactdetail: objectData,
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
