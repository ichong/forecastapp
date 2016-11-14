'use strict';

/**
 * @ngdoc service
 * @name forecastappApp.forecast
 * @description
 * # forecast
 * Factory in the forecastappApp.
 */
angular.module('forecastappApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=5&units=imperial&APPID=7e044416c796272a96e548ac758717cf', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560'
        },
        isArray:false
      }
    });
  });
