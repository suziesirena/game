appControllers.controller('testCtrl',
  function($rootScope, $scope, $state, $mdToast, $ionicModal, Audio, $ngData, $cordovaSQLite, db, Eventservices, User, PNJ, Event, SMS) {

    $scope.var1 = PNJ;
    $scope.eventID = 1;

    $scope.launchEvent = function(eventID) {
      Event.findById(eventID).then(function(event) {
        Eventservices.launch(event);
      });
    }

    $scope.test1 = function() {

      Event.findById(1).then(function(event) {
        Eventservices.launch(event);
      })

    };

    $scope.test2 = function() {
      a = SMS.count({
        pnjID: 2,
        read: 'unread'
      }).then(function(result) {
        console.log(result.count);
      })
    };

    $scope.test3 = function() {}

    $scope.populateData = function() {
      populateData($ngData);

    }


    $scope.openModal = function() {
      $scope.modal.show();
    }

    $scope.closeModal = function() {
      $scope.modal.hide();
    }


    $ionicModal.fromTemplateUrl('templates/about.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      // if (true){
      //   $scope.openModal();
      // }
    });
  });