(function() {
  'use strict';

  angular
    .module('app.addVoters')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'addVoters',
        config: {
          url: '/addVoters',
          templateUrl: '/admin/addVoters/index.html',
          controller: 'AddVoters as vm',
          title: 'AddVoters',
          resolve: {/* @ngInject */
            authenticated: function getAccessType($location, $q, commonsDataService, userInfoServiceApi) {
              return $q.all([getAccessTypeCallback()])
                .then(function(response) {
                  // if(response[0].accessType !== 'admin') {
                  //   $location.path('/login');
                  // }
                  return response;
                });

                function getAccessTypeCallback() {
                  return commonsDataService
                    .httpGET('userInfo', {}, userInfoServiceApi)
                    .then(function(response) {
                      return response;
                    });
                }
            }
          }
        }
      }];
    }
}());
