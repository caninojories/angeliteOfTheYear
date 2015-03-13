(function() {
  'use strict';

  var express = require('express'),
  router  = express.Router();

  router.get('/client/student/index.html', io.authorize, io.xPoweredBy, function(req, res) {
    if(!req.isAuthenticated) {return res.redirect('/client/login/index.html');}

    res.render('client/student/index.html');
  });

  module.exports = router;
}());
