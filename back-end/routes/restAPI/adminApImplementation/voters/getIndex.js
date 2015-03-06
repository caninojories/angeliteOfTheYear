(function() {
  'use strict';

  exports.votersResult = function(req, res, next) {
    var options = {
      name: 'Voter',
      res : res
    };

    io.mongoDB(io.config.dbName)
      .then(io.get.findList(options));
  };
}());
