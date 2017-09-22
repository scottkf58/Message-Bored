angular.module('myApp')
.controller('UserListController', ['$scope', 'UsersService', function ($scope, UsersService) {
    $scope.users = [];

    UsersService.getUsers()
    .then(function (users) {
      $scope.users = users;
    });
  }]);