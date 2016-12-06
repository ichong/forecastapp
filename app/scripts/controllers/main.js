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

     $scope.getIcon = function(text) {
        if (text === 'Rain') {
            return 'wi-umbrella';

        } else if(text === 'Light Rain') {
            return 'wi-raindrops';

        } else if(text === 'Snow') {
            return 'wi-snowflake-cold';

        } else if(text === 'Light Snow') {
            return 'wi-snow';

        } else if(text === 'Sleet') {
            return 'wi-sleet';

        } else if(text === 'Wind') {
            return 'wi-windy';

        } else if(text === 'Clear'){
            return 'wi-day-sunny';

        } else if(text === 'Fog') {
            return 'wi-fog';

        } else if(text === 'Cloudy') {
            return 'wi-cloudy';

        } else if(text === 'Partly Cloudy') {
            return 'wi-partly cloudy';

        } else if(text === 'Mist') {
            return 'wi-sprinkle';

        } else {
            return 'wi-sunrise';
        }
     };

    	$scope.searchQuery = $scope.location;
    };
});
