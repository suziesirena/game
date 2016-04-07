appControllers.controller('smsCtrl', function ($scope, $stateParams, $ionicPopup, $timeout) {


  function getMockMessages() {
    return {"messages":[{"_id":"535d625f898df4e80e2a125e","text":"Ionic has changed the game for hybrid app development.","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-04-27T20:02:39.082Z","read":true,"readDate":"2014-12-01T06:27:37.944Z"},{"_id":"535f13ffee3b2a68112b9fc0","text":"I like Ionic better than ice cream!","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-04-29T02:52:47.706Z","read":true,"readDate":"2014-12-01T06:27:37.944Z"},{"_id":"546a5843fd4c5d581efa263a","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-11-17T20:19:15.289Z","read":true,"readDate":"2014-12-01T06:27:38.328Z"},{"_id":"54764399ab43d1d4113abfd1","text":"Am I dreaming?","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-11-26T21:18:17.591Z","read":true,"readDate":"2014-12-01T06:27:38.337Z"},{"_id":"547643aeab43d1d4113abfd2","text":"Is this magic?","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-11-26T21:18:38.549Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"},{"_id":"547815dbab43d1d4113abfef","text":"Gee wiz, this is something special.","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-11-28T06:27:40.001Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"},{"_id":"54781c69ab43d1d4113abff0","text":"I think I like Ionic more than I like ice cream!","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-11-28T06:55:37.350Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"},{"_id":"54781ca4ab43d1d4113abff1","text":"Yea, it's pretty sweet","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-11-28T06:56:36.472Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"},{"_id":"5478df86ab43d1d4113abff4","text":"Wow, this is really something huh?","userId":"534b8fb2aa5e7afc1b23e69c","date":"2014-11-28T20:48:06.572Z","read":true,"readDate":"2014-12-01T06:27:38.339Z"},{"_id":"54781ca4ab43d1d4113abff1","text":"Create amazing apps - ionicframework.com","userId":"534b8e5aaa5e7afc1b23e69b","date":"2014-11-29T06:56:36.472Z","read":true,"readDate":"2014-12-01T06:27:38.338Z"}],"unread":0};
  }


  // $scope.data = {};
  // $scope.data.message = "";
  // $scope.messages = Chat.getMessages();
  // var typing = false;
  // var lastTypingTime;
  // var TYPING_TIMER_LENGTH = 250;
  //
  // Socket.on('connect',function(){
  //
  //   if(!$scope.data.username){
  //     var username = 'Guest' + Math.random();
  //     $scope.data.username = username;
  //     Socket.emit('add user',username);
  //     Chat.setUsername(username);
  //     // var nicknamePopup = $ionicPopup.show({
  //     // template: '<input id="usr-input" type="text" ng-model="data.username" autofocus>',
  //     // title: 'What\'s your nickname?',
  //     // scope: $scope,
  //     // buttons: [{
  //     //     text: '<b>Save</b>',
  //     //     type: 'button-positive',
  //     //     onTap: function(e) {
  //     //       if (!$scope.data.username) {
  //     //         e.preventDefault();
  //     //       } else {
  //     //         return $scope.data.username;
  //     //       }
  //     //     }
  //     //   }]
  //     // });
  //     // nicknamePopup.then(function(username) {
  //     //   Socket.emit('add user',username);
  //     //   Chat.setUsername(username);
  //     // });
  //   }
  //
  // });
  //
  // Chat.scrollBottom();
  //
  // if($stateParams.username){
  //   $scope.data.message = "@" + $stateParams.username;
  //   document.getElementById("msg-input").focus();
  // }
  //
  // var sendUpdateTyping = function(){
  //   if (!typing) {
  //     typing = true;
  //     Socket.emit('typing');
  //   }
  //   lastTypingTime = (new Date()).getTime();
  //   $timeout(function () {
  //     var typingTimer = (new Date()).getTime();
  //     var timeDiff = typingTimer - lastTypingTime;
  //     if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
  //       Socket.emit('stop typing');
  //       typing = false;
  //     }
  //   }, TYPING_TIMER_LENGTH);
  // };
  //
  // $scope.updateTyping = function(){
  //   sendUpdateTyping();
  // };
  //
  // $scope.messageIsMine = function(username){
  //   return $scope.data.username === username;
  // };
  //
  // $scope.getBubbleClass = function(username){
  //   var classname = 'from-them';
  //   if($scope.messageIsMine(username)){
  //     classname = 'from-me';
  //   }
  //   return classname;
  // };
  //
  // $scope.sendMessage = function(msg){
  //   Chat.sendMessage(msg);
  //   $scope.data.message = "";
  // };

});
