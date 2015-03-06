(function() {
  'use strict';

  angular
    .module('app.view')
    .controller('View', View);

    View.$inject = ['$q', 'result', 'commonsDataService', 'votersServiceApi'];

    function View($q, result, commonsDataService, votersServiceApi) {
      var vm = this;

      //console.log(result);
      // function getVotersResult() {
      //   return $q.all([getVotersResultCallback()])
      //     .then(function(response) {
      //       return response;
      //     });
      // }
      //
      // function getVotersResultCallback() {
      //   return commonsDataService
      //     .httpGETLIST('votersResult', {}, votersServiceApi)
      //     .then(function(response) {
      //       return response;
      //     });
      // }
    }
}());
