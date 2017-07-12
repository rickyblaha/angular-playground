(function() {
  'use strict';

  var app = angular.module('myApp', ['ngRoute']);

  app.controller('myController', function($scope, $location, $http) {
    $scope.firstName = 'Ricky';
    $scope.lastName = 'Blaha';

    $scope.favs = ['musicals', 'karaoke', 'chihuahuas'];
    $scope.obj = {foo: 1, bar: 2};

    $scope.itemsOrder = 'letter';
    $scope.items = [
      {letter: 'a', number: 5},
      {letter: 'b', number: 4},
      {letter: 'c', number: 3},
      {letter: 'd', number: 2},
      {letter: 'e', number: 1}
    ];

    $scope.changeName = function() {
      $scope.firstName = 'Fred';
      $scope.lastName = 'Flintstone';
    };

    $scope.fullName = function() {
      return $scope.firstName + ' ' + $scope.lastName;
    };

    $scope.myUrl = $location.absUrl();

    $http.get('https://qa.ad-formats.advertising.aol.com/v1/status')
        .then(function(res) {
          console.log(res);
          $scope.apiStatus = res.data;
        });
  });

  app.directive('myTestDirective', function() {
    return {
      template: '<b>Made by a directive constructor!</b>'
    };
  });

  app.service('hexify', function() {
    this.toHex = function(x) {
      return x.toString(16);
    };
  });


  app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'routes/main.html'
        })
        .when('/london', {
          templateUrl: 'routes/london.html',
          controller: 'londonController'
        })
        .when('/paris', {
          templateUrl: 'routes/paris.html',
          controller: 'parisController'
        })
        .otherwise({
          template: 'Whoops, this is an unknown route.'
        })
  });

  app.controller('myMenuController', function($scope) {
    $scope.menuItems = {
      '#!': 'Home',
      '#!london': 'London',
      '#!paris': 'Paris'
    };
  });

  app.controller('londonController', function($scope) {
    $scope.message = 'Welcome to LONDON';
  });

  app.controller('parisController', function($scope) {
    $scope.message = 'Welcome to PARIS';
  });

})();