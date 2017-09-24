angular.module('myApp')
.controller('MessageController', ['$rootScope', '$scope', '$window', 'TopicsService', 'MessagesService', function ($rootScope, $scope, $window, TopicsService, MessagesService) {
    $scope.newMessage = {body: ''};

    let topic_id = $window.location.href[$window.location.href.length -1];

    $scope.createNewMessage = function () {
      var newMessage = {
        body: $scope.newMessage.body,
        topic_id: topic_id,
        author_id: $rootScope.loggedInUser
      };

      MessagesService.createNewMessage(newMessage);
      $window.location.href = `/topics/${topic_id}`;
    };

      MessagesService.latestMessages()
        .then(function (messages) {
          $scope.messages = messages;
        });
  }
]);


