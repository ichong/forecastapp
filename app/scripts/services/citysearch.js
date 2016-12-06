'use strict';

/**
 * @ngdoc service
 * @name forecastappApp.citysearch
 * @description
 * # citysearch
 * Factory in the forecastappApp.
 */
angular.module('forecastappApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=7e044416c796272a96e548ac758717cf', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'Seattle'
        },
        isArray: false
      }
    });
  });
