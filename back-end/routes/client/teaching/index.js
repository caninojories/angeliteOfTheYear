(function() {
  'use strict';

  var express = require('express'),
  router  = express.Router();

  router.get('/client/teaching/index.html', function(req, res) {
    res.render('client/teaching/index.html');
  });

  module.exports = router;
}());
