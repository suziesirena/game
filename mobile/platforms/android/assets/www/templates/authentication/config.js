
myApp.config(function ($authProvider) {

  var commonConfig = {
    popupOptions: {
      location: 'no',
      toolbar: 'yes',
      width: window.screen.width,
      height: window.screen.height
    }
  };

  if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {
    commonConfig.redirectUri = 'http://localhost:8100/';
  }

  $authProvider.facebook(angular.extend({}, commonConfig, {
    clientId: '812438275568287',
    url: nodeServerURL + 'auth/facebook'
  }));

  $authProvider.twitter(angular.extend({}, commonConfig, {
    url: nodeServerURL + 'auth/twitter'
  }));

  $authProvider.google(angular.extend({}, commonConfig, {
    clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com',
    url: nodeServerURL + 'auth/google'
  }));

});
