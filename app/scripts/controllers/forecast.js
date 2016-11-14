'use strict';

/**
 * @ngdoc function
 * @name forecastappApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastappApp
 */
angular.module('forecastappApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
    	cityID: $routeParams.cityID
    });
  });
