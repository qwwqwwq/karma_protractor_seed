'use strict';
var App = angular.module('App', ['ngRoute']);

App.controller('IndexController', ['$scope',
                                   function ($scope) {
                                       $scope.theNumber = 0;
                                       $scope.increment = function () {
                                           $scope.theNumber += 1;
                                       };
                                   }
]);

App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
                  templateUrl: 'js/views/index.html',
                  controller: 'IndexController'
              })
        .otherwise({
                       redirectTo: '/'
                   })

    ;
}]);

