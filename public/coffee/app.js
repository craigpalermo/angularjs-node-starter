(function() {

  "use strict";

  var App;

  App = angular.module('App', ['ngRoute', 'ui.utils']).config([
    "$routeProvider", "$locationProvider", function($routeProvider) {
      return $routeProvider.when("/", {
        templateUrl: "/partials/home.html",
        controller: "BodyCtrl"
      }).otherwise({
        redirectTo: "/"
      });
    }
  ]);

  App.controller("BodyCtrl", function($rootScope, $scope, $http, $window, $location) {});

  App.run(function($rootScope, $window, $http, $location, $anchorScroll) {});

}).call(this);
