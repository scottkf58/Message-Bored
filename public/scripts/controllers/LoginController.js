angular.module('myApp')
.controller('LoginController', ['$scope','$window', 'AdminService', function ($scope, $window, AdminService) {
    $scope.user = {name: ''};
    $scope.login = function () {
      AdminService.login($scope.user)
      .then(function (response) {
        AdminService.setUser(response);
        $window.location.href = '/';

      });
    };
  }
]);
