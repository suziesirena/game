appServices.service('Eventservices', function($rootScope, $mdToast, $state, Event, Mail, PNJ, SMS, sound, AppSettings) {


  var service = this;


  this.launch = function(event) {
    if (event.nextEvent) {
      Event.findById(event.nextEvent).then(function(event) {
        service.launch(event);
      }, service);
    }

    switch (event.type) {
      case 'mail':
        this.sendMail(event);
        break;
      case 'sms':
        this.sendSMS(event);
        break;
    }

  }

  this.sendSMS = function(event) {

    setTimeout(function(event) {
      PNJ.findById(event.senderID).then(function(pnj) {

          event.pnj = pnj;
          event.config = JSON.parse(event.config);

          for (var i = 0; i <= event.config.length - 1; i++)  {
            setTimeout(function(event, indexMessage) {
              SMS.create([{
                  senderID: event.senderID,
                  senderName: event.pnj.firstName + ' ' + event.pnj.lastName,
                  content: event.config[indexMessage][1],
                  createDate: Date.now(),
                  read: 'notread',
                  answered: ''
                }]).then(function(sms) {
                  console.log('sms inserted : ' + JSON.stringify(sms));

                  if ($state.current.name != 'app.home') {
                    $mdToast.show({
                      controller: 'toastController',
                      templateUrl: 'toast.html',
                      hideDelay: 3000,
                      position: 'top',
                      locals: {
                        displayOption: {
                          title: sms[0].senderName + " has sent you a message :<br/>" + sms[0].content
                        }
                      }
                    });
                  }

                  $rootScope.appSettings.unreadSMS++;
                  $rootScope.appSettings.save().then(function(results) {
                    console.log(results);
                  }).catch(function(error) {
                    console.log('appSettings update : ' + error.message);
                  });
                  sound.notification();
                })
                .catch(function(error) {
                  console.log('SMS creation : ' + error.message);
                });

            }, event.config[i][0], event, i);
          }

        })
        .catch(function(error) {
          console.log(error.message);
        });


    }, event.scheduledTime, event);


  }

  this.sendMail = function(event) {
    setTimeout(function(event) {
      PNJ.findById(event.senderID).then(function(pnj) {
        Mail.create([{
            senderID: event.senderID,
            senderName: pnj.firstName + ' ' + pnj.lastName,
            subject: event.subject,
            abstract: event.abstract,
            content: event.content,
            createDate: Date.now(),
            read: 'notread',
            answered: ''
          }])
          .then(function(mail) {
            console.log('Mail inserted : ' + JSON.stringify(mail));
            if ($state.current.name != 'app.home') {
              $mdToast.show({
                controller: 'toastController',
                templateUrl: 'toast.html',
                hideDelay: 3000,
                position: 'top',
                locals: {
                  displayOption: {
                    title: mail[0].senderName + " has sent you a mail :<br/>" + mail[0].content
                  }
                }
              });
            }
            $rootScope.unreadMails++;
            $rootScope.appSettings.unreadMails++;
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

})
