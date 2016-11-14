'use strict';

describe('Service: almanac', function () {

  // load the service's module
  beforeEach(module('forecastappApp'));

  // instantiate service
  var almanac;
  beforeEach(inject(function (_almanac_) {
    almanac = _almanac_;
  }));

  it('should do something', function () {
    expect(!!almanac).toBe(true);
  });

});
