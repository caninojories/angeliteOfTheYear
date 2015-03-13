(function() {
  'use strict';

  exports.votersSubmit = function(req, res, next) {
    var query   = io.url.parse(req.url, true).query,
        token   = req.headers.authorization.split(' ')[1],
        payLoad = io.jwt.decode(token, 'shhh..'),
        options = {
          find    : payLoad.sub,
          name    : 'Voter',
          result  : 'Result',
          query   : query,
          res     : res,
          count   : true,
          details : {
            nonTeaching : 'nonTeaching',
            student     : 'student',
            org         : 'org'
          }
        };

    io.mongoDB(io.config.dbName)
      .then(io.update.putById(options));

  };
}());
