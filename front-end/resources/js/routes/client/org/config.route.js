(function() {
  'use strict';

  angular
    .module('app.org')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'org',
        config: {
          url: '/org',
          templateUrl: '/client/org/index.html',
          controller: 'Org as vm',
          resolve: {
            authenticated: function($location, $state, $window, authToken) {
              if (!authToken.isAuthenticated()) {$location.path('/login');}
            }
          }
        }
      }];
    }
}());
