angular.module('myApp')
.controller('MessageController', ['$scope', 'MessagesService', '$routeParams', function ($scope, MessagesService, $routeParams) {
    var route = $routeParams;
    MessagesService.getByTopic(route)
    .then(function (messages) {
      $scope.messages = messages;
    });
  }]);