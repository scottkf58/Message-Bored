angular.module('myApp', ['ngRoute']);

var myApp = angular.module('myApp');

myApp
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'latest.html',
          controller: 'LatestController'
        })
        .when('/login', {
          templateUrl: 'login.html',
          controller: 'LoginController'
        })
        .when('/register', {
          templateUrl: 'register.html',
          controller: 'RegController'
        })
        .when('/users', {
          templateUrl: 'users.html',
          controller: 'UsersController'
        })
        .when('/users/:id', {
          templateUrl: 'user.html',
          controller: 'UserByIdController'
        })
        .when('/newTopic', {
          templateUrl: 'newTopic.html',
          controller: 'NewTopicController'
        })
        .when('/topics/:id', {
          templateUrl: 'topicDetail.html',
          controller: 'TopicDetailController'
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

      $locationProvider.html5Mode({
        enabled: true
      });
    }
  ])
  .run([
    '$rootScope',
    function($rootScope) {

    }
  ]);