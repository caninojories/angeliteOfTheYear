(function() {
    'use strict';

    var config = {
      appErrorPrefix: '[Magens Error] ', //Configure the exceptionHandler decorator
      appTitle: 'Angelite: Made @by League of Outstanding Programmers',
      version: '0.0.0'
    };

    angular
      .module('app.core')
      .value('config', config)
      .config(configure)
      .config(toastrConfig)
      .config(registerNsignInConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    registerNsignInConfig.$inject = ['$authProvider', 'cfpLoadingBarProvider'];
    /* @ngInject */
    function registerNsignInConfig($authProvider, cfpLoadingBarProvider) {
      cfpLoadingBarProvider.latencyThreshold = 100;
      $authProvider.loginUrl        = window.location.origin + '/userApi/userLogIn';
      $authProvider.loginRedirect   = '/addVoters';
      $authProvider.logoutRedirect  = '/login';
      // $authProvider.loginUrl    = window.location.origin + '/votersApi/votersLogin';
      $authProvider.signupUrl       = window.location.origin + '/userApi/userRegister';
      $authProvider.tokenPrefix     = 'magens';

      $authProvider.facebook({
        clientId: '789445017793242',
        url: window.location.origin + '/userApi/logInUserFacebook'
      });

      $authProvider.google({
        clientId: '514855305579-vmrkir3l76c0v2t6b5mtnphh38uf9irp.apps.googleusercontent.com',
        url: window.location.origin + '/userApi/logInUserGoogle'
      });
    }

    configure.$inject = ['$httpProvider', '$locationProvider', '$logProvider', '$urlRouterProvider',
      '$stateProvider', 'RestangularProvider', 'exceptionHandlerProvider', 'routehelperConfigProvider'];
    /* @ngInject */
    function configure ($httpProvider, $locationProvider, $logProvider, $urlRouterProvider,
      $stateProvider, RestangularProvider, exceptionHandlerProvider, routehelperConfigProvider) {
        RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});

        $locationProvider.html5Mode(true);
        if ($logProvider.debugEnabled) {
          $logProvider.debugEnabled(true);
        }

        routehelperConfigProvider.config.$stateProvider = $stateProvider;
        routehelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
        routehelperConfigProvider.config.docTitle = 'NG-Modular: ';

        $httpProvider.interceptors.push('authInterceptor');
        /*Configure the common exception handler*/
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
})();
