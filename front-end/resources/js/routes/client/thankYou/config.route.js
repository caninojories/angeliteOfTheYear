(function() {
  'use strict';

  angular
    .module('app.thankYou')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'thankYou',
        config: {
          url: '/thankyou',
          templateUrl: '/client/thankYou/index.html',
          controller: 'ThankYou as vm',
          title: 'Thank You',
          resolve: {/* @ngInject */
            authenticated: function($location, $state, $window, authToken) {
              if (!authToken.isAuthenticated()) {
                $window.location.href = $window.location.origin + '/login';
              }
            }
          }
        }
      }];
    }
}());
