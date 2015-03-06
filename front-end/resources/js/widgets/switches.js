(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('tabSwitches', tabSwitches);

    tabSwitches.$inject = ['$scrollspy'];
    /* @ngInject */
    function tabSwitches($scrollspy) {
      var directive = {
        restrict: 'AEC',
        link: link
      };

      return directive;

      function link(scope, element, attrs) {
        element.bootstrapSwitch('onSwitchChange', function() {
          var switchObj     = $('[data-toggle="switch"]');
          var elementSwitch = $('[data-toggle="switch"][data-name="'+ attrs.name + '"]');
          for (var i = 0; i <= elementSwitch.length; i++) {
              if (elementSwitch[i] !== this) {
                if ($(this).bootstrapSwitch('state') !== false) {
                  $(elementSwitch[i]).bootstrapSwitch('disabled', true);
                  scope[attrs.name] = attrs.value;
                }
                else {
                  $(elementSwitch[i]).bootstrapSwitch('disabled', false);
                  scope[attrs.name] = null;
                }
              }
            }
        });
      }
    }
}());
