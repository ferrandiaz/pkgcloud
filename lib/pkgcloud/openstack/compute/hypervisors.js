/*
 * hypervisor.js: OpenStack Cloud hypervisor
 *
 * (C) 2013 Nodejitsu Inc.
 *
 */

var util  = require('util'),
    base  = require('../../core/compute/hypervisors'),
    _     = require('lodash');

var hypervisor = exports.hypervisor = function hypervisor(client, details) {
  base.hypervisor.call(this, client, details);
};

util.inherits(hypervisor, base.hypervisor);

hypervisor.prototype._setProperties = function (details) {
  this.id   = details.id;
  this.name = details.hypervisor_hostname;
  this.ram  = details.memory_mb;
  this.ramFree = details.free_ram_mb;
  this.vcpus = details.vcpus;
  this.vcpusUsed = details.vcpus_used;
};

hypervisor.prototype.toJSON = function () {
  return _.pick(this, ['id', 'name', 'ram', 'ramFree', 'vcpus', 'vcpusUsed' ]);
};
