(function() {
  'use strict';

  var express = require('express'),
  router  = express.Router();

  router.get('/client/nonTeaching/index.html', io.authorize, io.xPoweredBy, function(req, res) {
    if(!req.isAuthenticated) {return res.redirect('/client/login/index.html');}
    res.render('client/nonTeaching/index.html');
  });

  module.exports = router;
}());
