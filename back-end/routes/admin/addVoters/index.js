(function() {
  'use strict';

  var router = io.express.Router();

  router.get('/admin/addVoters/index.html', io.authorize, io.xPoweredBy, function(req, res) {
    res.render('admin/addVoters/index.html');
  });

  module.exports = router;
}());
