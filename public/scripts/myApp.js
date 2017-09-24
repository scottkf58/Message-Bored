angular.module('myApp', ['ngRoute']);
var myApp = angular.module('myApp');

myApp
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'login.html',
          controller: 'LoginController'
        })
        .when('/register', {
          templateUrl: 'register.html',
          controller: 'RegisterController'
        })
        .when('/users', {
          templateUrl: 'users.html',
          controller: 'UserListController'
        })
        .when('/newTopic', {
          templateUrl: 'newTopic.html',
          controller: 'NewTopicController'
        })
        .when('/topics/:id', {
          templateUrl: 'topic.html',
          controller: 'NewMessageController'
        })
        .when('/topicsList', {
          templateUrl: 'topicsList.html',
          controller: 'GetTopicsController'
        })
        .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode(true);
    }
  ])
  .run(['$rootScope', '$window','AdminService', function ($rootScope, $window, AdminService) {
      $rootScope.isLoggedIn = localStorage.loggedIn;
      $rootScope.loggedInUser = localStorage.user_id;
      $rootScope.loggedInUserName = localStorage.user;

      $rootScope.logout = function () {
        AdminService.logout();
        $window.location.href = '/';
      };
    }
  ]);
