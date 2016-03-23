function initializePushNotification(RequestsService) {

try {
  var push = PushNotification.init({
      android: {
          senderID: "133818721466"
      }
  });


  push.on('registration', function(data) {
      // data.registrationId
      console.log('register: ' + data.registrationId);

      RequestsService.register(data.registrationId).then(function(response){
        console.log('registered!');
      });

  });

  push.on('notification', function(data) {
      // data.message,
      // data.title,
      // data.count,
      // data.sound,
      // data.image,
      // data.additionalData
      console.log('notify: ' + data.message);
  });

  push.on('error', function(e) {
      // e.message
      alert('err: ' + e.message);
  });

} catch(err) { console.log('Push notificaions are not active')}

}
