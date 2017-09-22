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
          controller: 'TopicController'
        })
        .when('/topicsList', {
          templateUrl: 'topicsList.html',
          controller: 'GetTopicsController'
        })
        .when('/latest', {
          templateUrl: 'latest.html',
          controller: 'LatestController'
        })
        .when('/newMessage', {
          templateUrl: 'newMessage.html',
          controller: 'NewMessageController'
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
