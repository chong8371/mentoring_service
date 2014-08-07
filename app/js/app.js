'use strict';


// Declare app level module which depends on filters, and services
angular.module('MentoringServiceApp', [
  'ngRoute',
  'MentoringServiceApp.filters',
  'MentoringServiceApp.services',
  'MentoringServiceApp.directives',
  'MentoringServiceApp.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/partial1.html', controller: 'loginCtrl'});
  $routeProvider.when('/signup', {templateUrl: 'partials/partial2.html', controller: 'signupCtrl'});
  $routeProvider.when('/users', {templateUrl: 'partials/users.html', controller: 'usersCtrl'});
  $routeProvider.when('/user/:id', {templateUrl: 'partials/user.html', controller: 'userCtrl'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
