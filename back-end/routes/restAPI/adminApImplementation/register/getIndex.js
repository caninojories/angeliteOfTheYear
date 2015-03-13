(function() {
  'use strict';

  exports.getEmail = function(req, res, next) {
    var query = io.url.parse(req.url, true).query,
        options = {
          find: query.email,
          name: 'User',
          res : res
        };

    io.mongoDB(io.config.dbName)
      .then(io.get.findOne(options));
  };
}());
