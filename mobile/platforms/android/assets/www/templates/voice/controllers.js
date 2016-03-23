// Controller of menu dashboard page.
appControllers.controller('speechRecognitionCtrl', function ($scope) {
  $scope.data = {
    speechText: ''
  };
  $scope.recognizedText = '';

  $scope.speakText = function() {
    TTS.speak({
           text: $scope.data.speechText,
           locale: 'en-GB',
           rate: 1.5
       }, function () {
           // Do Something after success
       }, function (reason) {
           // Handle the error case
       });
  };

  var recognition = new SpeechRecognition();

  recognition.onError = function(event) {
    console.log('Error' +event);
  }

  recognition.onresult = function(event) {
    console.log('result : ' + event.results.length)
      if (event.results.length > 0) {
          $scope.recognizedText = event.results[0][0].transcript;
          $scope.$apply()
      }
  };

  $scope.record = function() {


// TODO : add requestPermission for Android 6 : changement des règles de permission : actuellement problème au Build

    // var permissions = window.plugins.permissions;
    // permissions.hasPermission(checkPermissionCallback, null, permissions.RECORD_AUDIO);
    //
    // function checkPermissionCallback(status) {
    //   if(!status.hasPermission) {
    //     var errorCallback = function() {
    //       console.warn('Camera permission is not turned on');
    //     }
    //
    //     permissions.requestPermission(function(status) {
    //       if( !status.hasPermission ) errorCallback();
    //     }, errorCallback, permissions.RECORD_AUDIO);
    //   } else {



        function startSpeechProcess(){
            setTimeout(function(){ recognition.start(); }, 1000);
        recognition.continuous = false;
            recognition.start();
        }
        startSpeechProcess()
      // }
    // }


  };
})
