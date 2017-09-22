angular.module('myApp')
.controller('GetTopicsController', ['$scope', 'TopicsService', function($scope, TopicsService) {
    $scope.topics = [];
    TopicsService.getTopics()
    .then(function (topics) {
      $scope.topics = topics;
    });
  }]);