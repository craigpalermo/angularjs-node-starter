"use strict"

App = angular.module('App', ['ngRoute', 'ui.utils']).config([
  "$routeProvider"
  "$locationProvider"

  # define routes for different views here
  ($routeProvider) ->
    $routeProvider.when("/",
      templateUrl: "home.html"
      controller:  ""
    ).otherwise(redirectTo: "/")
])

App.controller "BodyCtrl", ($rootScope, $cookies,  $scope, $http, $window, $location) ->
  # this controller applies to entire body
  return

App.run ($rootScope, $cookies, $window, $http, $location, $anchorScroll) ->
  # this runs once when page loads
  return
