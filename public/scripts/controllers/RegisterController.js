angular.module('myApp')
.controller('RegisterController', ['$scope', '$window', 'AdminService', function ($scope, $window, AdminService) {
    $scope.user = '';

    $scope.createNewUser = function () {
      var user = {
        name: $scope.user
      };

      AdminService.createNewUser(user);
      console.log(user);
      $window.location.href = '/login';
    };
  }]);