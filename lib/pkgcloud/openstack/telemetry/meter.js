/*
 * meter.js: OpenStack Cloud meter
 *
 * (C) 2013 Nodejitsu Inc.
 *
 */

var util  = require('util'),
    base  = require('../../core/telemetry/meter'),
    _     = require('lodash');

var meter = exports.meter = function meter(client, details) {
  base.meter.call(this, client, details);
};

util.inherits(meter, base.meter);
