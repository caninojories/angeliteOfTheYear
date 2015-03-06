(function() {
  'use strict';

  var router = io.express.Router();

  router.get('/admin/view/index.html', function(req, res) {
    res.render('admin/view/index.html');
  });

  module.exports = router;
}());
