appServices.factory('Eventservices', function($rootScope, Mail) {

  return {
      newMail: function(text){

          Mail.create([{
               fromPNJ     : 'The Agency',
               subject     : 'Phone activation',
               content     : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
               createDate  : Date.now()
          }])
          .then(function(mail) {
              console.log('Mail inserted : ' + JSON.stringify(mail));
              $rootScope.newMails ++;

              if ($rootScope.isAndroid) sound.notification();
          })
          .catch(function(error) {
              console.log(error.message);
          });


      }
    }
});
