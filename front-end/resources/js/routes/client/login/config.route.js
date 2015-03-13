(function() {
  'use strict';

  angular
    .module('app.votersLogin')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'votersLogin',
        config: {
          url: '/login',
          templateUrl: '/client/login/index.html',
          controller: 'VotersLogin as vm',
          title: 'Voters Login',
          resolve: {/* @ngInject */
            authenticated: function($auth, $location, $state, $window, authToken) {
              if ($auth.isAuthenticated()) {
                $location.path('/');
              }
            }
          }
        }
      }];
    }
}());
