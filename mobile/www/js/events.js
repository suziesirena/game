appServices.service('Eventservices', function($rootScope, Event, Mail, PNJ, Action, sound, AppSettings) {

  this.launch = function(event){

    if (event.nextEvent) {
      Event.findById(event.nextEvent).then(function(event){
        this.launch(event);
      });
    }

    switch (event.type) {
        case 'mail':
            this.newMail(event);
        break;
    }

  }

  this.newSMS = function(event){

    setTimeout(function(event){

          for (var i=0 ; i<event.config ; i++) {
                setTimeout(function(event){
                  PNJ.findById(event.senderID).then(function(pnj){
                      SMS.create([{
                           senderID       : event.senderID,
                           senderName     : pnj.firstName + ' ' + pnj.lastName,
                           content        : event.config[1],
                           createDate     : Date.now(),
                           read           : 'notread',
                           answered       : ''
                      }])
                      .then(function(sms) {
                          console.log('sms inserted : ' + JSON.stringify(sms));
                          $rootScope.appSettings.unreadSMS ++;
                          $rootScope.appSettings.save().then(function(results) {
                              console.log(results);
                          }).catch(function(error) {
                              console.log(error);
                          });
                          sound.notification();
                      })
                      .catch(function(error) {
                          console.log(error.message);
                      });
                  })
                }, event.scheduledTime, event.config[0]);
          }

    }, event.scheduledTime, event);

  }

  this.newMail = function(event){
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
              $rootScope.unreadMails ++;
              $rootScope.appSettings.unreadMails ++;
              $rootScope.appSettings.save().then(function(results) {
                  console.log(results);
              }).catch(function(error) {
                  console.log(error);
              });

              // Action.create({
              //     type          : String,
              //     beginTime     : Number,
              //     EndTime       : Number,
              //     completed     : String,
              //     config        : Object
              // });

              sound.notification();
          })
          .catch(function(error) {
              console.log(error.message);
          });
      })
    }, event.scheduledTime, event);

  }

});
