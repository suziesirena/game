appControllers
  .controller('mailsCtrl', function($rootScope, $scope, $state, $sce, Mail) {

    $scope.allMails = function() {
      Mail.find().then(function(mails) {
        $scope.mails = mails;
      })
    }
    $scope.allMails();

    $rootScope.$on('$stateChangeStart', function() {
      if (!$scope.mails) {
        $scope.allMails();
      }
    });

    $scope.navigateTo = function(targetPage, objectData) {
      $state.go(targetPage, {
        data: objectData
      });
    };
  })
  .controller('mailCtrl', function($rootScope, $scope, $stateParams, $state, $sce) {

    // $scope.$on('$state.beforeEnter', function() {
    if ($stateParams.data) {
      $scope.mail = $stateParams.data;
      if ($stateParams.data.read != 'read') {
        $rootScope.appSettings.unreadMails--;
        $rootScope.appSettings.save();
        $scope.mail.read = 'read';
        $scope.mail.save();
      }

      $scope.mailContent = $sce.trustAsHtml($stateParams.data.content);

    } else {
      $state.go('app.mails');
    }
    // });
  })