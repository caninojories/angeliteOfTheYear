(function() {
  'use strict';

  var express = require('express'),
  router  = express.Router();

  router.get('/client/thankYou/index.html', function(req, res) {
    console.log(!req.isAuthenticated);
    if(!req.isAuthenticated) {return res.redirect('/client/login/index.html');}
    res.render('client/thankYou/index.html');
  });

  module.exports = router;
}());
