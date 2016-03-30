appControllers.controller('homeCtrl', function ($rootScope, $scope, $mdBottomSheet, $mdToast, $ionicModal, $state, Util, Eventservices, Event) {

   Event.create({
             type          : 'mail',
             fromPNJ       : 1,
             scheduledTime : 2000,
             content       : 'Hello, You have been recruited to serve the cause of the agency. Connect to the Agency to activate your phone and wait for instructions.<button class="button button-block button-positive" ng-click="closeModal()">Connect to the Agency</button>'
         }).then(function(event) {
             Eventservices.newMail(event)
         })

// `      $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
//         if (!Util.isAuthenticated()) {
//           $rootScope.openModal();
//         }
//       });`

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
