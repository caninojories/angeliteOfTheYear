(function() {
  'use strict';

  var router = global.io.express.Router();

  router.get('/client/login/index.html', io.authorize, io.xPoweredBy, function(req, res) {
    if(req.isAuthenticated) {return res.redirect('/client/index/index.html');}
    res.render('client/login/index.html');
  });

  module.exports = router;

}());
