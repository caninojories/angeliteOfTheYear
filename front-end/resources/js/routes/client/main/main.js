(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('Main', Main);

    Main.$inject = ['$q', '$rootScope', '$scope', 'commonsDataService', 'votersServiceApi'];

    /* @ngInject */
    function Main($q, $rootScope, $scope, commonsDataService, votersServiceApi) {
      var vm = this;
      vm.votersSubmit = votersSubmit;

      function votersSubmit() {
        $q.all([votersSubmitCallback()])
          .then(function(response) {
            return response;
          });
      }

      function votersSubmitCallback() {
        return commonsDataService
          .httpPUT('votersSubmit', {
            teaching    : $scope.teaching,
            nonTeaching : $scope.nonTeaching,
            student     : $scope.student,
            org         : $scope.org
          }, votersServiceApi)
          .then(function(response) {
            return response;
          });
      }
    }
}());
