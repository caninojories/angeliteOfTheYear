(function() {
  'use strict';

  var  router  = io.express.Router();

  router.get('/client/index/index.html', io.authorize, io.xPoweredBy, function(req, res) {
    if(!req.isAuthenticated) {return res.redirect('/client/login/index.html');}
    res.render('client/index/index.html');
  });

  module.exports = router;
}());
