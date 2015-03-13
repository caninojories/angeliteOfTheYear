(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('tabSwitches', tabSwitches);

    tabSwitches.$inject = ['$rootScope', '$scrollspy', '$q', 'commonsDataService', 'votersServiceApi'];
    /* @ngInject */
    function tabSwitches($rootScope, $scrollspy, $q, commonsDataService, votersServiceApi) {
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
          scope.$broadcast('model');


            //console.log(attrs.ngModel);
            // scope.$watch(attrs.ngModel, function() {
            //   if (!scope.$$phase && !scope.$root.$$phase){
            //     scope.$apply(function() {
            //       $rootScope[attrs.ngModel] = scope[attrs.ngModel];
            //     });
            //   }
            // });
            // if (attrs.category === 'nonTeaching') {
            //   console.log(scope[attrs.name]);
            //   $q.all([votersNonTeachingCallback()])
            //     .then(function(response) {
            //       return response;
            //     });
            // }
            //
            // function votersNonTeachingCallback() {
            //   return commonsDataService
            //     .httpPUT('votersSubmit', {
            //       nonTeaching : scope[attrs.name],
            //     }, votersServiceApi)
            //     .then(function(response) {
            //       return response;
            //     });
            // }
        });
      }
    }
}());
