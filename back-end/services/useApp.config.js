(function() {
  'use strict';

  module.exports = function() {
    var clientRoutes  = global.io.rootPath + 'back-end/routes/client/',
        adminRoutes   = global.io.rootPath + 'back-end/routes/admin/';
    var useApp = {
      addVoters   : require(adminRoutes + 'addVoters'),
      index       : require(clientRoutes + 'index'),
      nonTeaching : require(clientRoutes + 'nonTeaching'),
      org         : require(clientRoutes + 'org'),
      sample      : require(clientRoutes + 'sample'),
      student     : require(clientRoutes + 'student'),
      teaching    : require(clientRoutes + 'teaching'),
      thankYou    : require(clientRoutes + 'thankYou'),
      view        : require(adminRoutes + 'view'),
      votersLogin : require(clientRoutes + 'votersLogin')
    };
    return useApp;
  };
}());
