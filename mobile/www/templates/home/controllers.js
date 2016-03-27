appControllers.controller('homeCtrl', function ($rootScope, $scope, $mdBottomSheet, $mdToast, $ionicModal, $state) {


  $scope.openModal = function(){
    $scope.modal.show();
  }

  $scope.closeModal = function(){
    $scope.modal.hide();
    $state.go('app.login');
  }
  //
  // $ionicModal.fromTemplateUrl('templates/transparent.html', {
  //       scope: $scope,
  //     }).then(function(modal) {
  //       $scope.transparent = modal;
  //       if (true){
  //       modal.show();
  //       }
  //     });
  $ionicModal.fromTemplateUrl('templates/about.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

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
