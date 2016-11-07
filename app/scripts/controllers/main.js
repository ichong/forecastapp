'use strict';

/**
 * @ngdoc function
 * @name forecastappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forecastappApp
 */
angular.module('forecastappApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
    	$scope.current = current.query({
    		location: $scope.location
    	});
    };
  });
