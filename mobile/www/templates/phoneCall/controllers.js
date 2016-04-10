// Controller of menu dashboard page.
appControllers.controller('callCtrl', function($rootScope, $scope, $mdToast, $state, $stateParams, Audio, Speech, Action) {

  $scope.$on('$ionicView.enter', function() {

    if ($stateParams.data) {
      Action.findOne({
        pnjID: $stateParams.data.id
      }).then(function(action) {
        action.nextEventID = JSON.parse(action.nextEventID);
        Audio.play(action.audio, action.nextEventID);

      }).catch(function(error) {
        console.log(error.message);
      });
    } else {
      $state.go('app.contacts');
    }
  });

  $scope.data = {
    speechText: ''
  };
  $scope.recognizedText = '';

  $scope.speakText = function() {
    TTS.speak({
      text: $scope.data.speechText,
      locale: 'en-GB',
      rate: 1.5
    }, function() {
      // Do Something after success
    }, function(reason) {
      // Handle the error case
    });
  };



})

.controller('facetimeCtrl', function($rootScope, $scope, $mdToast) {

  $rootScope.$watch('pnjs', function() {
    $scope.pnjs = $rootScope.pnjs;
    $scope.dialogs = $rootScope.dialogs;
    $scope.context = $rootScope.context;

  });

  //ShowToast for show toast when user press button.
  $scope.showToast = function(menuName) {
    //Calling $mdToast.show to show toast.
    $mdToast.show({
      controller: 'toastController',
      templateUrl: 'toast.html',
      hideDelay: 800,
      position: 'top',
      locals: {
        displayOption: {
          title: 'Going to ' + menuName + " !!"
        }
      }
    });
  }; // End showToast.
})