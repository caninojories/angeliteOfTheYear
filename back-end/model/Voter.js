(function() {
  'use strict';

  var mongoose  = require('mongoose');

  var VoterSchema = new mongoose.Schema({
    votersId : {
      type: String,
      unique: true
    },
    nonTeaching: {
      type: String,
      default: null
    },
    student: {
      type: String,
      default: null
    },
    org: {
      type: String,
      default: null
    },
    accessType: {
      type: String,
      default: 'local'
    }
  });

  VoterSchema.statics.teachingResult = function (name, cb) {
    this
      .find({teaching:name})
      .count()
      .exec()
      .then(cb);
    //return this;
  };

  // VoterSchema.methods.toJSON = function(node) {
  //   var user = this.toObject();
  //
  //   //var teaching = VoterSchema.find({teaching: 'one'}).count();
  //   //
  //   // console.log(teaching);
  //
  //   return user;
  // };
  var voters = mongoose.model('Voter', VoterSchema);
  module.exports = mongoose.model('Voter', VoterSchema);
}());
