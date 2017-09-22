angular.module('myApp')
.controller('RegisterController', ['$scope', '$window', 'AdminService', function ($scope, $window, AdminService) {
    $scope.user = '';

    $scope.createNewUser = function () {
      var user = {
        name: $scope.user
      };

      AdminService.createNewUser(user);
      $window.location.href = '/login';
    };
  }]);