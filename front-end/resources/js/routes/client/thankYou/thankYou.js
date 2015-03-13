(function() {
  'use strict';

  angular
    .module('app.thankYou')
    .controller('ThankYou', ThankYou);

    ThankYou.$inject = ['$location', '$timeout', '$window', 'authToken'];
    /* @ngInject */
    function ThankYou($location, $timeout, $window, authToken) {
      var vm = this;
      vm.countDown = 5;

      timer();

      function timer() {
        if(vm.countDown === 0) {
          authToken.removeToken();
          $timeout(function() {
            $window.location.href = $window.location.origin + '/login';
          }, 300);
        }

        $timeout(function() {
          vm.countDown = vm.countDown - 1;
          return timer();
        }, 1000);
      }
    }
}());
