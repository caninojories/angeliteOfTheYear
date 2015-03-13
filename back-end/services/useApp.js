(function() {
  'use strict';

  module.exports = function(app) {
    return useApp([
      global.io.useAppConfig().addVoters,
      global.io.useAppConfig().index,
      global.io.useAppConfig().nonTeaching,
      global.io.useAppConfig().org,
      global.io.useAppConfig().sample,
      global.io.useAppConfig().student,
      global.io.useAppConfig().teaching,
      global.io.useAppConfig().thankYou,
      global.io.useAppConfig().view,
      global.io.useAppConfig().votersLogin,
    ]);

    function useApp(param) {
      param.forEach(function(name) {
        app.use('/', name);
      });
    }
  };

}());
