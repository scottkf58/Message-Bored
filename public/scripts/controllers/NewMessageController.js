angular.module('myApp')
.controller('NewMessageController', ['$scope', '$window', 'TopicsService', 'MessagesService', function ($scope, $window, TopicsService, MessagesService) {
    $scope.newMessage = {
      topic_id: '',
      body: '',
      author_id: '',
    };

    TopicsService.getTopics()
    .then(function (topics) {
      $scope.topics = topics;
    });

    $scope.createNewMessage = function () {
      var newMessage = {
        topic_id: $scope.newMessage.topic_id,
        body: $scope.newMessage.body,
        author_id: localStorage.user_id
      };

      MessagesService.createNewMessage(newMessage);
      $window.location.href = '/latest';
    };
  }
]);