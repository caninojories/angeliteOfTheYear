(function() {
  'use strict';

  angular
    .module('app.addVoters')
    .controller('AddVoters', AddVoters);

    AddVoters.$inject = ['$q', '$rootScope', '$timeout', 'strapAlert', 'commonsDataService', 'votersServiceApi'];

    function AddVoters($q, $rootScope, $timeout, strapAlert, commonsDataService, votersServiceApi) {
      var vm = this;

      /*Functions*/
      vm.addVoters    = addVoters;

      function addVoters(form) {
        var time = 2000;
        if(!form.$valid || !form.votersId.$viewValue) {return;}
          return $q.all([addVotersCallback()])
            .then(function(response) {
              if (response[0] === 'Forbidden') {
                strapAlert.show('Warning!!!', vm.VotersId + ' has already been added', 'danger');
                vm.VotersId = '';
                time = 4000;
              } else {
                strapAlert.show('Success!!!', vm.VotersId + ' has been successfully added', 'success');
                vm.VotersId = '';
              }
              $timeout(function() {
                strapAlert.hide();
                document.getElementById('votersId').focus();
              }, time);
            });
      }

      function addVotersCallback() {
        return commonsDataService
          .httpPOST('addVoters', {
            votersID: vm.VotersId
          }, votersServiceApi)
          .then(function(response) {
            return response;
          });
      }
    }
}());
