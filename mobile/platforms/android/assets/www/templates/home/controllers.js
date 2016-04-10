appControllers.controller('homeCtrl', function($rootScope, $scope, $mdBottomSheet, $mdToast, $ionicModal, $state, Util, Eventservices, Event) {


  function waitForData() {

    if (!$rootScope.appSettings) {
      setTimeout(waitForData, 100);
    } else {
      if ($rootScope.appSettings.init == 'false') {
        console.log('Scenario launched');
        Eventservices.sendMail({
          pnjID: 1,
          scheduledTime: 2000,
          nextEvent: JSON.stringify({
            'Event': 2
          }),
          subject: 'You are about to join us',
          abstract: 'Do not read this mail if you are not ready',
          content: 'This is your decision to click on this button<br/><a class="button button-block button-positive" href="#/app/login">Connect to the Agency</a>',
        });
        $rootScope.appSettings.init = 'true';
        $rootScope.appSettings.save();
      } else {
        if ($rootScope.appSettings.phoneActivated == 'false') {
          console.log('Phone not activated');
        } else {
          console.log('Phone activated');
        }
      }
    }
  }

  waitForData();

  $scope.showListBottomSheet = function($event) {
    $mdBottomSheet.show({
      templateUrl: 'ui-list-bottom-sheet-template',
      targetEvent: $event,
      scope: $scope.$new(false),
    });
  }; // End of showListBottomSheet.

  // For show Grid Bottom Sheet.
  $scope.showGridBottomSheet = function($event) {
    $mdBottomSheet.show({
      templateUrl: 'ui-grid-bottom-sheet-template',
      targetEvent: $event,
      scope: $scope.$new(false),
    });
  }; // End of showGridBottomSheet.

  // For close list bottom sheet.
  $scope.closeListBottomSheet = function() {
      $mdBottomSheet.hide();
    } // End of closeListBottomSheet.

});