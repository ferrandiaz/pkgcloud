
var util = require('util'),
model = require('../base/model');

var hypervisor = exports.hypervisor = function (client, details) {
model.Model.call(this, client, details);
};

util.inherits(hypervisor, model.Model);

hypervisor.prototype.refresh = function (callback) {
return this.client.gethypervisor(this, callback);
};