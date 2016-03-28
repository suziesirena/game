//
//Welcome to app.js
//This is main application config of project. You can change a setting of :
//  - Global Variable
//  - Theme setting
//  - Icon setting
//  - Register View
//  - Spinner setting
//  - Custom style
//
//Global variable use for setting color, start page, message, oAuth key.
var wakandaServerURL = 'http://localhost:8082/';
var nodeServerURL = 'http://localhost:8200';

try {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://raw.githubusercontent.com/suziesirena/game/master/servers.js', false);  // `false` makes the request synchronous
  request.send(null);

  if (request.status === 200) {
    console.log(request.responseText);
    eval(request.responseText);
  } else {
    console.log('No access to servers URLs');
  }
} catch (err) { console.error("Error: ", err.message); }

var db = null; //Use for SQLite database.
window.globalVariable = {
    //custom color style variable
    color: {
        appPrimaryColor: "",
        dropboxColor: "#017EE6",
        facebookColor: "#3C5C99",
        foursquareColor: "#F94777",
        googlePlusColor: "#D73D32",
        instagramColor: "#517FA4",
        wordpressColor: "#0087BE"
    },// End custom color style variable
    startPage: {
        url: "/app/home",//Url of start page.
        state: "app.home"//State name of start page.
    },
    message: {
        errorMessage: "Technical error please try again later." //Default error message.
    },
    oAuth: {
        dropbox: "your_api_key",//Use for Dropbox API clientID.
        facebook: "your_api_key",//Use for Facebook API appID.
        foursquare: "your_api_key", //Use for Foursquare API clientID.
        instagram: "your_api_key",//Use for Instagram API clientID.
        googlePlus: "your_api_key",//Use for Google API clientID.
    },
    adMob: "your_api_key" //Use for AdMob API clientID.
};// End Global variable



var myApp = angular.module('starter', ['ionic', 'satellizer', 'ngIOS9UIWebViewPatch', 'starter.controllers', 'starter.services',
               'ngMaterial', 'ngMessages', 'ngCordova', 'ngResource', 'btford.socket-io', 'chat.services',
               'ionic.contrib.drawer.vertical', 'ngData', 'util.services'])


    .run(function ($ionicPlatform, $cordovaSQLite, $rootScope, $ionicHistory,
                   $state, $mdDialog, $mdBottomSheet, RequestsService, $cordovaMedia,
                   $ngData, $ionicModal) {

         $rootScope.closeModal = function(){
           $state.go('app.login');
           $rootScope.modal.hide();
         }

         $rootScope.openModal = function(){
           $rootScope.modal.show();
         }

        $ionicModal.fromTemplateUrl('templates/about.html', {
              scope: $rootScope,
              animation: 'slide-in-up'
            }).then(function(modal) {
              $rootScope.modal = modal;
            });

        function initialRootScope() {
            $rootScope.appPrimaryColor = appPrimaryColor;// Add value of appPrimaryColor to rootScope for use it to base color.
            $rootScope.isAndroid = ionic.Platform.isAndroid();// Check platform of running device is android or not.
            $rootScope.isIOS = ionic.Platform.isIOS();// Check platform of running device is ios or not.
        };

        function hideActionControl() {
            //For android if user tap hardware back button, Action and Dialog should be hide.
            $mdBottomSheet.cancel();
            $mdDialog.cancel();
        };

        // Add custom style while initial application.
        $rootScope.customStyle = createCustomStyle(window.globalVariable.startPage.state);

        $ionicPlatform.ready(function () {
            ionic.Platform.isFullScreen = true;
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }

            initialSQLite($cordovaSQLite);
            initDatabase($ngData);
            initialRootScope();

            //Checking if view is changing it will go to this function.
            $rootScope.$on('$ionicView.beforeEnter', function () {
                //hide Action Control for android back button.
                hideActionControl();
                // Add custom style ti view.
                $rootScope.customStyle = createCustomStyle($ionicHistory.currentStateName());
            });
        });

        initializePushNotification(RequestsService);

    })

    .config(function ($ionicConfigProvider, $stateProvider, $authProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, $mdColorPalette, $mdIconProvider) {

        // Use for change ionic spinner to android pattern.
        $ionicConfigProvider.spinner.icon("android");
        $ionicConfigProvider.views.swipeBackEnabled(false);

        // mdIconProvider is function of Angular Material.
        // It use for reference .SVG file and improve performance loading.
        $mdIconProvider
            .icon('facebook', 'img/icons/facebook.svg')
            .icon('twitter', 'img/icons/twitter.svg')
            .icon('mail', 'img/icons/mail.svg')
            .icon('message', 'img/icons/message.svg')
            .icon('share-arrow', 'img/icons/share-arrow.svg')
            .icon('more', 'img/icons/more_vert.svg');

        //mdThemingProvider use for change theme color of Ionic Material Design Application.
        /* You can select color from Material Color List configuration :
         * red
         * pink
         * purple
         * purple
         * deep-purple
         * indigo
         * blue
         * light-blue
         * cyan
         * teal
         * green
         * light-green
         * lime
         * yellow
         * amber
         * orange
         * deep-orange
         * brown
         * grey
         * blue-grey
         */
        //Learn more about material color patten: https://www.materialpalette.com/
        //Learn more about material theme: https://material.angularjs.org/latest/#/Theming/01_introduction
        $mdThemingProvider
            .theme('default')
            .primaryPalette('pink')
            .accentPalette('red');

        appPrimaryColor = $mdColorPalette[$mdThemingProvider._THEMES.default.colors.primary.name]["500"]; //Use for get base color of theme.

    })
    .config(function( $mdGestureProvider ) {
        $mdGestureProvider.skipClickHijack();
    })
    .config(function($databaseProvider) {

        $databaseProvider.name = 'anotherlife';
        $databaseProvider.description = 'anotherlife  database';
        $databaseProvider.version = '1.0.0';
        $databaseProvider.size = 4 * 1024 * 1024;

    })
