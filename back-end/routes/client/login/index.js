(function() {
  'use strict';

  var router = global.io.express.Router();

  router.get('/client/login/index.html', io.authorize, io.xPoweredBy, function(req, res) {
    console.log(req.isAuthenticated);
    if(req.isAuthenticated) {return res.redirect('/client/main/index.html');}
    res.render('client/login/index.html');
  });

  module.exports = router;

}());
