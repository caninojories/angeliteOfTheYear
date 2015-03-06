(function() {
  'use strict';

  var mongoose  = require('mongoose');

  var ResultSchema = new mongoose.Schema({
    teaching: [{name: String, votes: Number}],
    nonTeaching: [{name: String, votes: Number}],
    student:[{name: String, votes: Number}],
    org: [{name: String, votes: Number}]
  });

  module.exports = mongoose.model('Result', ResultSchema);
}());
