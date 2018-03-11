/*
 * meter.js: OpenStack Cloud meter
 *
 * (C) 2013 Nodejitsu Inc.
 *
 */

var util = require('util'),
  base = require('../../core/telemetry/alarm'),
  _ = require('lodash');

var alarm = exports.alarm = function alarm(client, details) {
  base.alarm.call(this, client, details);
};

util.inherits(alarm, base.alarm);
