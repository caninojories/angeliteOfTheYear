(function() {
  'use strict';

  angular
    .module('app.view')
    .controller('View', View);

    View.$inject = ['$q', 'commonsDataService', 'votersServiceApi'];
    /* @ngInject */
    function View($q, commonsDataService, votersServiceApi) {
      var vm = this;

      getVotersResult();
      function getVotersResult() {
        return $q.all([getVotersNonTeaching()])
          .then(function(response) {
            vm.votersResult = response[0];
          });
      }

      function getVotersNonTeaching() {
        return commonsDataService
          .httpGET('count', {}, votersServiceApi)
          .then(function(response) {
            return response;
          });
      }
    }
}());
