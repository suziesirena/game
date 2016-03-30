appServices.factory('sound', function($rootScope) {

    return {
        notification: function(text){
          var src ='sounds/notification.mp3'
          // HTML5 Audio
            if (typeof Audio != "undefined") {
                new Audio(src).play() ;

            // Phonegap media
            } else if (typeof device != "undefined") {

                // Android needs the search path explicitly specified
                if (device.platform == 'Android') {
                    src = '/android_asset/www/' + src;
                }

                var mediaRes = $cordovaMedia.newMedia(src,
                        // success callback
                        function () {
                            console.log("playAudio():Audio Success");
                        },
                        // error callback
                        function (err) {
                            console.log("playAudio():Audio Error: " + err);
                        }
                    );
                    // Play audio
                    mediaRes.play();

            } else {
                console.log("no sound API to play: " + src);
            }
        },

        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }
    }
});
