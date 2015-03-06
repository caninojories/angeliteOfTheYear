(function() {
  'use strict';

  var node    = appRequire('services/module.config'),
      router  = node.express.Router();

  router.get('/client/main/index.html', io.authorize, io.xPoweredBy, function(req, res) {
    res.render('client/main/index.html');
  });

  module.exports = router;
}());
