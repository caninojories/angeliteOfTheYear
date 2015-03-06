(function() {
  'use strict';

  module.exports = function(app) {
    return useApp([
      global.io.useAppConfig().main,
      global.io.useAppConfig().sample,
      global.io.useAppConfig().login,
      global.io.useAppConfig().addVoters,
      global.io.useAppConfig().view
    ]);

    function useApp(param) {
      param.forEach(function(name) {
        app.use('/', name);
      });
    }
  };

}());
