appControllers.controller('homeCtrl', function ($rootScope, $scope, $mdBottomSheet, $mdToast, $ionicModal, $state, Util) {


// `      $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
//         if (!Util.isAuthenticated()) {
//           $rootScope.openModal();
//         }
//       });`

  $scope.showListBottomSheet = function ($event) {
      $mdBottomSheet.show({
          templateUrl: 'ui-list-bottom-sheet-template',
          targetEvent: $event,
          scope: $scope.$new(false),
      });
  };// End of showListBottomSheet.

  // For show Grid Bottom Sheet.
  $scope.showGridBottomSheet = function ($event) {
      $mdBottomSheet.show({
          templateUrl: 'ui-grid-bottom-sheet-template',
          targetEvent: $event,
          scope: $scope.$new(false),
      });
  };// End of showGridBottomSheet.

  // For close list bottom sheet.
  $scope.closeListBottomSheet = function () {
      $mdBottomSheet.hide();
  } // End of closeListBottomSheet.

});
