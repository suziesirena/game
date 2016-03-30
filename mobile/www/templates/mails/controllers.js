appControllers.controller('mailsCtrl', function ($rootScope, $scope, Mail) {


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

  // db = window.cordova ? $cordovaSQLite.openDB("anotherlife.db") : window.openDatabase("anotherlife.db", "1.0", "AnotherLifeDB", -1);
  //
  // $scope.all = function($cordovaSQLite){
  //
  //   var query = "SELECT * FROM mails";
  //   var mails = [];
  //   $cordovaSQLite.execute(db, query).then(function (res)
  //   {
  //       if (res.rows.length > 0)
  //       {
  //           for (var i = 0; i < res.rows.length; i++)
  //           {
  //               var dataItem = {
  //                   id          : res.rows.item(i).id,
  //                   transmitter : res.rows.item(i).transmitter,
  //                   subject     : res.rows.item(i).subject,
  //                   content     : res.rows.item(i).content.substr(0, 200)
  //               };
  //               mails.push(dataItem);
  //           }
  //       }
  //   });
  //   return mails;
  // }
  //
  // $scope.mails = $scope.all($cordovaSQLite);

});
