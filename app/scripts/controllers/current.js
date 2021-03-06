'use strict';

/**
 * @ngdoc function
 * @name forecastappApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the forecastappApp
 */
angular.module('forecastappApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = current.query({
    	cityID: $routeParams.cityID

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

        } else {
            return 'wi-sunrise';
        }
     };

    $scope.saveCity = function(city){
    	var cityData = {
    		'name': city.name,
    		'id': city.id 
    	};

    	if (!$localStorage.savedCities){
    		$localStorage.savedCities = [cityData];

            $scope.citySaved = {
                'success': true
            };     
    	} else {
    		//We have already saved some cities.
    		//Check to make sure we haven't already saved the current city.
    		var save = true; //Initialize the save decision variable.
    		//Use this loop to check if we've already saved the city.
    		for (var i=0; i < $localStorage.savedCities.length; i++){
    			if ($localStorage.savedCities[i].id === cityData.id) {
    				//This is a duplicate, so don't save (variable set to false).
    				save = false;
    			}
    		}
    		if (save === true){
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


