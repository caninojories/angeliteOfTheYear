(function() {
  'use strict';

  angular
    .module('app.index')
    .controller('Index', Index);

    Index.$inject = ['$location', '$q', '$rootScope', '$scope', '$state', '$timeout', 'authToken',
    'commonsDataService', 'userInfoServiceApi', 'votersServiceApi'];

    /* @ngInject */
    function Index($location, $q, $rootScope, $scope, $state, $timeout, authToken,
    commonsDataService, userInfoServiceApi, votersServiceApi) {
      var vm = this;
      vm.votersSubmit = votersSubmit;

      getAccessType();

      $scope.$on('model', function() {
        $scope.$apply(function() {
          $scope.nonTeaching  = $scope.nonTeaching;
          $scope.nonTeaching  = $scope.nonTeaching;
          $scope.org          = $scope.org;
        });
      });

      function getAccessType() {
        return $q.all([getAccessTypeCallback()])
          .then(function(response) {
            console.log(response);
            if(response[0].accessType !== undefined) {
              $location.path('/addVoters');
            }
          });
      }

      function getAccessTypeCallback() {
        return commonsDataService
          .httpGET('userInfo', {}, userInfoServiceApi)
          .then(function(response) {
            return response;
          });
      }

      function votersSubmit() {
        $q.all([votersSubmitCallback()])
          .then(function(response) {
            if(response[0] === 'success') {
              $timeout(function() {
                $location.path('/thankyou');
              }, 300);
            }
          });
      }

      function votersSubmitCallback() {
        return commonsDataService
          .httpPUT('votersSubmit', {
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
