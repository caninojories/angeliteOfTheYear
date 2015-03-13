(function() {
  'use strict';

  angular
    .module('app.view')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'view',
        config: {
          url: '/view',
          templateUrl: '/admin/view/index.html',
          controller: 'View as vm',
          title: 'View',
          resolve: {/* @ngInject */
            authenticated: function getAccessType($location, $q, commonsDataService, userInfoServiceApi) {
              return $q.all([getAccessTypeCallback()])
                .then(function(response) {
                  if(response[0].data === null) {
                    return $location.path('/login');
                  }
                  if(response[0].accessType !== 'admin') {
                    $location.path('/login');
                  }
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
