appServices.service('Audio', function($rootScope) {


  this.notification = function(file) {
    this.play('notification.mp3');

  }

  this.play = function(file) {

    // HTML5 Audio
    if (typeof Audio != "undefined") {
      new Audio('audio/' + file).play();

      // Phonegap media
    } else if (typeof device != "undefined") {

      // Android needs the search path explicitly specified
      if (device.platform == 'Android') {
        file = '/android_asset/www/audio/' + file;
      }

      var mediaRes = $cordovaMedia.newMedia(file,
        // success callback
        function() {
          console.log("playAudio():Audio Success");
        },
        // error callback
        function(err) {
          console.log("playAudio():Audio Error: " + err);
        }
      );
      // Play audio
      mediaRes.play();

    } else {
      console.log("no sound API to play: " + file);
    }
  }
});