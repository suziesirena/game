appControllers.controller('testCtrl', function ($rootScope, $scope, $mdToast) {

  $rootScope.newMails=0;


  $scope.test1 = function () {

    $rootScope.newMails ++;
    var my_media = new Media('sounds/notification.mp3',
            // success callback
            function () {
                console.log("playAudio():Audio Success");
            },
            // error callback
            function (err) {
                console.log("playAudio():Audio Error: " + err);
            }
        );
        // Play audio
        my_media.play();

  };

  $scope.test2 = function () {

  };

  $scope.test3 = function () {

  }

});
