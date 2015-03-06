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
          title: 'AddVoters'
        }
      }];
    }
}());
