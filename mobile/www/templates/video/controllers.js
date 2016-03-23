
appControllers.controller('videoCtrl', function ($rootScope, $scope, $interval) {

  $rootScope.nbMails = 0;


  var video = document.getElementById('video');

  var events = [
    {
      'type' : 'question',
      'time' : 100
    }
  ];

  var eventIndex = 0;

  $interval(function(){
    $scope.time = video.currentTime;

    if (events[eventIndex].time <= video.currentTime) {
      video.pause();
    }


  },10);

  $scope.toto = function(){

    document.getElementById('snow').style.display='inherit';
    setTimeout(function(){
      video.currentTime = 5;
      document.getElementById('snow').style.display='none';
    },400);


    $rootScope.nbMails ++;

  }

  // (function (Seriously) {
  //   // declare our variables
  //   var source = document.getElementById('source'),
  //     seriously, // the main object that holds the entire composition
  //     shake, // camerashake node
  //     reformat,
  //     recenter,
  //     target; // a wrapper object for our target canvas
  //
  //   seriously = new Seriously();
  //   shake = seriously.transform('camerashake');
  //   target = seriously.target('#canvas');
  //   reformat = seriously.transform('reformat');
  //   recenter = seriously.transform('2d');
  //
  //   // connect all our nodes in the right order
  //   reformat.source = '#robot';
  //   reformat.width = 400;
  //   reformat.height = 400;
  //   reformat.mode = 'cover';
  //
  //   recenter.source = reformat;
  //   recenter.translateY = -80;
  //
  //   shake.source = recenter;
  //   shake.amplitudeX = 80; //'#amplitudeX';
  //   shake.amplitudeY = 20; //'#amplitudeY';
  //   shake.frequency = 0.15; //'#frequency';
  //   shake.rotation = 3; //'#rotation';
  //   shake.autoScale = true; //'#autoScale';
  //   shake.preScale = 1; //'#preScale';
  //
  //   target.source = shake;
  //
  //   //render
  //   seriously.go(function (now) {
  //     shake.time = now / 1000;
  //   });
  // }(window.Seriously));


})
