appControllers
.controller('mailsCtrl', function ($rootScope, $scope, $state, $sce, Mail) {

  $scope.allMails = function() {
    Mail.find().then(function(mails){
      $scope.mails = mails;
    })
  }
  $scope.allMails();

  $rootScope.$on('$stateChangeStart',function(){
    if (!$scope.mails) {
      $scope.allMails();
    }
  });

  $scope.navigateTo = function (targetPage, objectData) {
    $state.go(targetPage, {
        mailDetail: objectData
    });
  };
})
.controller('mailCtrl', function ($rootScope, $scope, $stateParams, $state, $sce) {

  if ($stateParams.mailDetail) {
    $scope.mailContent = $sce.trustAsHtml($stateParams.mailDetail.content);
    $scope.mail = $stateParams.mailDetail;
  } else {
    $state.go('app.mails')
  }
})
