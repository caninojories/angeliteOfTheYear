(function() {
  'use strict';

  module.exports = function() {
    var clientRoutes  = global.io.rootPath + 'back-end/routes/client/',
        adminRoutes   = global.io.rootPath + 'back-end/routes/admin/';
    var useApp = {
      main     : require(clientRoutes + 'main'),
      sample   : require(clientRoutes + 'sample'),
      login    : require(clientRoutes + 'login'),
      addVoters: require(adminRoutes + 'addVoters'),
      view     : require(adminRoutes + 'view')
    };
    return useApp;
  };
}());
