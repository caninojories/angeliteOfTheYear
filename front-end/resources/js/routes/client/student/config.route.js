(function() {
  'use strict';

  angular
    .module('app.student')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'student',
        config: {
          url: '/student',
          templateUrl: '/client/student/index.html',
          controller: 'Student as vm',
          resolve: {
            authenticated: function($location, $state, $window, authToken) {
              if (!authToken.isAuthenticated()) {$location.path('/login');}
            }
          }
        }
      }];
    }
}());
