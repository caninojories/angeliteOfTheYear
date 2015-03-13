(function() {
  'use strict';

  angular
    .module('app.teaching')
    .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
      routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
      return [{
        state: 'teaching',
        config: {
          url: '/teaching',
          templateUrl: '/client/teaching/index.html',
          controller: 'Teaching as vm'
        }
      }];
    }
}());
