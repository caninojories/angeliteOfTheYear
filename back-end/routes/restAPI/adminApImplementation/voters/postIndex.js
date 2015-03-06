(function() {
  'use strict';

  exports.addVoters = function(req, res, next) {
    var options = {
      name    : 'Voter',
      res     : res,
      details : {
        votersId: req.body.votersID
      },
    };

    io.mongoDB(io.config.dbName)
      .then(io.save(options));
  };

  exports.votersLogin = function(req, res, next) {
    io.mongoDB(io.config.dbName)
      .then(function() {
        io.Voter
          .findOne({votersId: req.body.votersId})
          .exec()
          .then(function(voter) {
            console.log(voter);
            if(!voter) {return res.json(401, 'You are not yet registered');}
            io.createSendToken(io, voter, res);
          });
      });
  };
}());
