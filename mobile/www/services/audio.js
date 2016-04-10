appServices.service('Audio', function($rootScope, $cordovaMedia, Speech) {


  this.notification = function(file) {
    this.play('notification.mp3');

  }

  this.play = function(file, nextEventID) {

    // if (typeof Audio != "undefined") {
    //   new Audio('audio/' + file).play();
    //
    // } else
    if (typeof device != "undefined") {

      if (device.platform == 'Android') {
        file = '/android_asset/www/audio/' + file;
      }

      var mediaRes = $cordovaMedia.newMedia(file,
        function() {
          console.log("playAudio():Audio Success");
        },
        function(err) {
          console.log("playAudio():Audio Error: " + err);
        },
        function(status) {
          console.log("playAudio():Audio status: " + status);
          switch (code) {
            case Media.MEDIA_STOPPED:
              Speech.listen(nextEventID);
              break;
          }
        }
      );

      mediaRes.play();

    } else {
      console.log("no sound API to play: " + file);
    }
  }

  this.onSpeechRecongnized = function(text) {
    console.log(text);
  }
});