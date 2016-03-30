appControllers
  .controller('LoginCtrl', ['$rootScope', '$scope', '$ionicPopup', '$auth', 'User', function($rootScope, $scope, $ionicPopup, $auth, User) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(response) {

          alert(JSON.stringify(response));
          // $scope.user = User.new();
          //
          //   User.create([{
          //     firstName   : 'Suzie',
          //     lastName    : 'Sirena',
          //     telephone   : '0679956247',
          //     email       : 'suzie.sirena@gmail.com',
          //     createDate  : Date.now(),
          //     age         : 21,
          //     isEnable    : 'true'
          //   }])
          //   .then(function(users) {
          //       console.log('User inserted : ' + JSON.stringify(users));
          //   })
          //   .catch(function(error) {
          //       console.log(error.message);
          //   });
          //
          $ionicPopup.alert({
            title: 'Success',
            content: 'You have successfully logged in!'
          });
        })
        .catch(function(response) {
          $ionicPopup.alert({
            title: 'Error',
            content: response.data ? response.data || response.data.message : response
          });

        });
    };


    $scope.logout = function() {
      $auth.logout();
    };

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
      $rootScope.firstUse = '0%';
    };
  }]);
