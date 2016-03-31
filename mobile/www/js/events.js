appServices.factory('Eventservices', function($rootScope, Mail, PNJ, sound) {

  return {
      newMail: function(event){
        setTimeout(function(event){
          PNJ.findById(event.senderID).then(function(pnj){
              Mail.create([{
                   senderID       : event.senderID,
                   senderName     : pnj.firstName + ' ' + pnj.lastName,
                   subject        : event.subject,
                   abstract       : event.abstract,
                   content        : event.content,
                   createDate     : Date.now(),
                   read           : 'notread',
                   answered       : ''

              }])
              .then(function(mail) {
                  console.log('Mail inserted : ' + JSON.stringify(mail));
                  $rootScope.newMails ++;
                   sound.notification();
              })
              .catch(function(error) {
                  console.log(error.message);
              });
          })
        }, event.scheduledTime, event);

      }
    }
});
