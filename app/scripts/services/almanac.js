'use strict';

/**
 * @ngdoc service
 * @name forecastappApp.almanac
 * @description
 * # almanac
 * Factory in the forecastappApp.
 */
angular.module('forecastappApp')
  .factory('almanac', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.wunderground.com/api/6ed94cb371f0577b/almanac/q/.json', {}, {
      query: {
        method:'GET',
        params:{
          location: 'WA/Seattle',
        },
        isArray:false
      }
    });
  });
