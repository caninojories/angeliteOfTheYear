(function() {
  'use strict';

  angular
    .module('app.nonTeaching')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'nonTeaching',
        config: {
          url: '/nonteaching',
          templateUrl: '/client/nonTeaching/index.html',
          controller: 'NonTeaching as vm',
          resolve: {
            authenticated: function($location, $state, $window, authToken) {
              if (!authToken.isAuthenticated()) {$location.path('/login');}
            }
          }
        }
      }];
    }
}());
