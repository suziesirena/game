appControllers.controller('homeCtrl', function ($rootScope, $scope, $mdBottomSheet, $mdToast, $ionicModal, $state, Util, Eventservices, Event) {

/* TODO : SetTimeout pour attendre que les données soient dans la base : trouver un autre moyen de le détecter : transaction ? */
  setTimeout(function(){
    if ($rootScope.appSettings.phoneActivated == 'false') {
      console.log('Phone not activated');
      // Event.findById(1).then(function(event) {
            Eventservices.newMail({
                      senderID      : 1,
                      scheduledTime : 2000,
                      nextEvent     : JSON.stringify({'Event' : 2}),
                      subject       : 'You are about to join us',
                      abstract      : 'Do not read this mail if you are not ready',
                      content       : 'This is your decision to click on this button<br/><a class="button button-block button-positive" href="#/app/login">Connect to the Agency</a>',
            });
      // })
    } else {
       console.log('Phone activated');
    }
  }, 2000);
//       $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
//         if (!Util.isAuthenticated()) {
//           $rootScope.openModal();
//         }
//       });

  // console.log('-->' + Event.find());

  // Event.find().then(function(events) {
  //     console.log(events.length);
  //     // if (events.length == 0) {
  //       Event.create([{
  //         type        : 'mail',
  //         date        : Date.now() + 2000,
  //         content     : "Lorem"
  //       }])
  //       .then(function(events) {
  //           console.log('Event inserted : ' + JSON.stringify(events));
  //           setTimeout(function(){
  //             console.log('event');
  //             //database.newMail(events[0].content);
  //           }, events[0].date - Date.now())
  //       })
  //       .catch(function(error) {
  //           console.log(error.message);
  //       });
  //     // }
  // });

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
