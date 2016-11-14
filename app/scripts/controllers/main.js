'use strict';

/**
 * @ngdoc function
 * @name forecastappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forecastappApp
 */
angular.module('forecastappApp')
  .controller('MainCtrl', function ($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
    	$scope.citiesFound = citysearch.find({
    		query: $scope.location
    	});
    	$scope.searchQuery = $scope.location;
    };
});
