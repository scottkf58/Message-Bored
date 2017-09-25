angular.module('myApp')
.controller(
  'TopicController', ['$scope', 'TopicsService', '$routeParams', function ($scope, TopicsService, $routeParams) {
    TopicsService.getEachTopic($routeParams)
    .then(function (topic) {
      $scope.topic = {
        id: topic.id,
        name: topic.name,
        createdAt: topic.createdAt,
        author: topic.User.name
      };

      console.log(topic);
    });
  }]);