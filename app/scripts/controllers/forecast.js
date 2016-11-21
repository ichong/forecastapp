'use strict';

/**
 * @ngdoc function
 * @name forecastappApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastappApp
 */
angular.module('forecastappApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast, $localStorage) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
    	cityID: $routeParams.cityID
    });

    $scope.saveCity = function(city){
        var cityData = {
            'name': city.name,
            'id': city.id 
        };

        if (!$localStorage.savedCities){
            $localStorage.savedCities = [cityData];
        } else {
            //We have already saved some cities.
            //Check to make sure we haven't already saved the current city.
            var save = true; //Initialize the save decision variable.
            //Use this loop to check if we've already saved the city.
            for (var i=0; i < $localStorage.savedCities.length; i++){
                if ($localStorage.savedCities[i].id == cityData.id) {
                    //This is a duplicate, so don't save (variable set to false).
                    save = false;
                }
            }
            if (save==true){
                $localStorage.savedCities.push(cityData);
                //Add object to trigger messages
                $scope.citySaved = {
                    'success': true
                };
            } else {
                console.log('city already saved');
                //add object to trigger messages
                $scope.citySaved = {
                    'duplicate': true
                };
    		}
    	}
    };
  });
