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
          resolve: {
            result: function getVotersResult($q, commonsDataService, votersServiceApi) {
              return $q.all([getVotersResultCallback()])
                .then(function(response) {
                  return response;
                });

              function getVotersResultCallback() {
                return commonsDataService
                  .httpGETLIST('votersResult', {}, votersServiceApi)
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
