(function() {
  'use strict';

  module.exports = function() {
    var routesApi = global.io.rootPath + 'back-end/routes/restApi/API/';

    var useApi = {
      login   : require(routesApi + 'login'),
      register: require(routesApi + 'register'),
      user    : require(routesApi + 'user'),
      voters  : require(routesApi + 'voters')
    };
    return useApi;
  };
}());
