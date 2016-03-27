appControllers.controller('testCtrl', ['$rootScope', '$scope', '$mdToast', 'sound', 'database', function ($rootScope, $scope, $mdToast, sound, database) {

  $rootScope.newMails=0;


  $scope.test1 = function () {

    $rootScope.newMails ++;
    sound.notification();
    database.newMail();
  };

  $scope.test2 = function () {

  };

  $scope.test3 = function () {

  }

}]);
