(function() {
  'use strict';

  angular
    .module('app.votersLogin')
    .controller('VotersLogin', VotersLogin);

    VotersLogin.$inject = ['$auth', '$location', '$q', '$timeout', '$state', '$window',
    'authToken', 'commonsDataService', 'strapAlert', 'votersServiceApi'];
    /* @ngInject */
    function VotersLogin($auth, $location, $q, $timeout, $state, $window,
    authToken, commonsDataService, strapAlert, votersServiceApi) {
      var vm = this;

      vm.votersLogin = votersLogin;
      vm.votersLogout = votersLogout;

      function votersLogin(form) {
        if(vm.votersId === '1048854') {
          vm.joriesStudentNumber = true;
          return console.log(true);
        }
        if(!form.$valid || !form.votersId.$viewValue) {return;}
        $q.all([votersLoginCallback()])
          .then(function(response) {
            if(!response[0].token) {
              strapAlert.show('Something, went wrong!! ', 'You are not yet Registered', 'danger', 'alert-voters-login');
              vm.votersId = '';
              $timeout(function() {
                strapAlert.hide();
                document.getElementById('votersId').focus();
              }, 3000);
            } else {
              authToken.setToken(response[0].token);
              $timeout(function() {
                $window.location.href = $window.location.origin + '/';
              }, 300);
            }
          });
      }

      function votersLoginCallback() {
        return commonsDataService
          .httpPOST('votersLogin', {
            votersId: vm.votersId
          }, votersServiceApi)
          .then(function(response) {
            return response;
          });
      }

      function votersLogout() {
        authToken.removeToken();
        $state.go('votersLogin');
      }
    }
}());
