appControllers
  .controller('LoginCtrl', function($rootScope, $scope, $mdToast, $ionicPopup, $auth, Eventservices, Event, User) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(response) {

          //alert(JSON.stringify(response));
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
          $mdToast.show({
            controller: 'toastController',
            templateUrl: 'toast.html',
            hideDelay: 3000,
            position: 'top',
            locals: {
              displayOption: {
                title: 'Your phone is activated!'
              }
            }
          });
          // $ionicPopup.alert({
          //   title: 'Success',
          //   content: 'Your phone is activated!'
          // });
          $rootScope.appSettings.authProvider = provider;
          $scope.activatePhone();
        })
        .catch(function(response) {
          $ionicPopup.alert({
            title: 'Error',
            content: response.data ? response.data || response.data.message : JSON.stringify(response)
          });

        });
    };

    $scope.activatePhone = function() {
      $rootScope.appSettings.phoneActivated = 'true';
      $rootScope.appSettings.save();
      Event.findById(1).then(function(event) {
        Eventservices.launch(event);
      })
    }

    $scope.logout = function() {
      $auth.logout();
    };

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  });