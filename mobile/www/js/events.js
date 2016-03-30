appServices.factory('Eventservices', function($rootScope, Mail, sound) {

  return {
      newMail: function(event){
        setTimeout(function(event){
          Mail.create([{
               fromPNJ     : event.fromPNJ,
               subject     : event.subject,
               content     : event.content,
               createDate  : Date.now()
          }])
          .then(function(mail) {
              console.log('Mail inserted : ' + JSON.stringify(mail));
              $rootScope.newMails ++;
               sound.notification();
          })
          .catch(function(error) {
              console.log(error.message);
          });
        }, event.scheduledTime, event);

      }
    }
});
