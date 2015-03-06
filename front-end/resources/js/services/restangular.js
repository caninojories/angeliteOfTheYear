(function() {
  'use strict';

  angular.module('app.services')
    .factory('userInfoServiceApi', userInfoServiceApi)
    .factory('votersServiceApi', votersServiceApi);

  userInfoServiceApi.$inject  = ['Restangular'];
  votersServiceApi.$inject    = ['Restangular'];

  function userInfoServiceApi(Restangular) {
    return Restangular.all('userApi');
  }

  function votersServiceApi(Restangular) {
    return Restangular.all('votersApi');
  }
}());
