var util = require('util'),
  openstack = require('../../client'),
  TelemetryClient = require('../telemetryClient').TelemetryClient,
  _ = require('lodash');

var Client = exports.Client = function(options) {
  openstack.Client.call(this, options);

  _.extend(this, require('./meter'));
  _.extend(this, require('./alarm'));

  this.serviceType = 'metering';
};

util.inherits(Client, openstack.Client);
_.extend(Client.prototype, TelemetryClient.prototype);
