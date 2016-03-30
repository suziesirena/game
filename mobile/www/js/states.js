//$stateProvider is using for add or edit HTML view to navigation bar.
//
//Schema :
//state_name(String)      : Name of state to use in application.
//page_name(String)       : Name of page to present at localhost url.
//cache(Bool)             : Cache of view and controller default is true. Change to false if you want page reload when application navigate back to this view.
//html_file_path(String)  : Path of html file.
//controller_name(String) : Name of Controller.
//
//Learn more about ionNavView at http://ionicframework.com/docs/api/directive/ionNavView/
//Learn more about  AngularUI Router's at https://github.com/angular-ui/ui-router/wiki

myApp.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('app', {
          url: "/app",
          abstract: true,
          templateUrl: "templates/menu/menu.html",
          controller: 'menuCtrl'
      })
      .state('app.home', {
          url: "/home",
          params:{
              isAnimated:false
          },
          views: {
              'menuContent': {
                  templateUrl: "templates/home/home.html",
                  controller: 'homeCtrl'
              }
          }
      })
      .state('app.facetime', {
          url: "/facetime",
          params:{
              isAnimated:false
          },
          views: {
              'menuContent': {
                  templateUrl: "templates/phoneCall/facetime.html",
                  controller: 'facetimeCtrl'
              }
          }
      })
      .state('app.contacts', {
          url: "/contacts",
          params:{
              isAnimated:false
          },
          views: {
              'menuContent': {
                  templateUrl: "templates/contacts/contact-list.html",
                  controller: 'contactListCtrl'
              }
          }
      })
      .state('app.contact', {
          url: '/contact',
          params: {
              contactdetail: null
          },
          views: {
            'menuContent': {
                  templateUrl: 'templates/contacts/contact-detail.html',
                  controller: 'contactDetailCtrl'
            }
          }
      })

      // .state('reports', {
      //     url: '/employees/:employeeId/reports',
      //     templateUrl: 'templates/contacts/employee-reports.html',
      //     controller: 'EmployeeReportsCtrl'
      // })
      .state('app.chat', {
          url: '/chat',
          params:{
              isAnimated:false
          },
          views: {
              'menuContent': {
                  templateUrl: "templates/chat/tab-chats.html",
                  controller: 'ChatCtrl'
              }
          }
      })
      // .state('app.contractUs', {
      //     url: "/contractUs",
      //     views: {
      //         'menuContent': {
      //             templateUrl: "templates/contacts/email-message/html/contract-us.html",
      //             controller: 'contractUsCtrl'
      //         }
      //
      //     }
      // })
      // .state('app.defaultUI', {
      //     url: "/defaultUI",
      //     cache: false,
      //     views: {
      //         'menuContent': {
      //             templateUrl: "templates/material-user-interface/default-user-interface/html/default-user-interface.html",
      //             controller: 'defaultUserInterfaceCtrl'
      //         }
      //
      //     }
      // })
      .state('app.dashboard', {
          url: "/dashboard",
          views: {
              'menuContent': {
                  templateUrl: "templates/dashboard/dashboard.html",
                  controller: "dashboardCtrl"
              }
          }
      })
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/authentication/login.html',
            controller: 'LoginCtrl'
          }
        }
      })
      .state('app.speechRecognition', {
        url: '/speechRecognition',
        views: {
          'menuContent': {
            templateUrl: 'templates/voice/speechRecognition.html',
            controller: 'speechRecognitionCtrl'
          }
        }
      })
      .state('app.map', {
        url: '/map',
        views: {
          'menuContent': {
            templateUrl: 'templates/map/map.html',
            controller: 'mapCtrl'
          }
        }
      })
      .state('app.video', {
        url: '/video',
        views: {
          'menuContent': {
            templateUrl: 'templates/video/video.html',
            controller: 'videoCtrl'
          }
        }
      })
      .state('app.camera', {
        url: '/camera',
        views: {
          'menuContent': {
            templateUrl: 'templates/video/camerashake.html',
            controller: 'videoCtrl'
          }
        }
      })
      .state('app.notification', {
        url: '/notification',
        views: {
          'menuContent': {
            templateUrl: 'templates/notification/notification.html',
          }
        }
      })
      .state('app.test', {
        url: '/test',
        views: {
          'menuContent': {
            templateUrl: 'templates/test/test.html',
            controller: 'testCtrl'
          }
        }
      })
      .state('app.mails', {
        url: '/mails',
        views: {
          'menuContent': {
            templateUrl: 'templates/mails/mails.html',
            controller: 'mailsCtrl'
          }
        }
      })
  $urlRouterProvider.otherwise(window.globalVariable.startPage.url);

});
