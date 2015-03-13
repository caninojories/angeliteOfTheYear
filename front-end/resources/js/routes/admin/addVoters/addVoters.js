(function() {
  'use strict';

  angular
    .module('app.addVoters')
    .controller('AddVoters', AddVoters);

    AddVoters.$inject = ['$auth', '$location', '$q', '$rootScope', '$timeout', 'authenticated', 'strapAlert',
    'commonsDataService', 'votersServiceApi', 'userInfoServiceApi', 'exception'];
    /* @ngInject */
    function AddVoters($auth, $location, $q, $rootScope, $timeout, authenticated, strapAlert,
    commonsDataService, votersServiceApi, userInfoServiceApi, exception) {
      var vm = this;

      /*Functions*/
      vm.addVoters    = addVoters;
      console.log(authenticated);
      function addVoters(form) {
        var time = 2000;
        if(!form.$valid || !form.votersId.$viewValue) {return;}
          return $q.all([addVotersCallback()])
            .then(function(response) {
              if (response[0].data === 'Forbidden') {
                strapAlert.show('Warning!!!', vm.VotersId + ' has already been added',
                'danger', 'alert-voters-add');
                vm.VotersId = '';
                time = 4000;
              } else {
                strapAlert.show('Success!!!', vm.VotersId + ' has been successfully added',
                'success', 'alert-voters-add');
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
