(function() {
  'use strict';

  angular
    .module('app.index')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'index',
        config: {
          url: '/',
          templateUrl: '/client/index/index.html',
          controller: 'Index as vm',
          title: 'Index',
          resolve: {/* @ngInject */
            authenticated: function($auth, $location) {
              if (!$auth.isAuthenticated()) {
                $location.path('/login');
              }
            }
          }
        }
      }];
    }
}());
