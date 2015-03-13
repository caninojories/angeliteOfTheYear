(function() {
  'use strict';

  exports.registerUser = function(req, res, next) {
    io.createSendToken(io, req.user, res);
  };

}());
