(function() {
  'use strict';

  angular
    .module('app.commons')
    .factory('commonsDataService', commonsDataService);

    commonsDataService.$inject = ['authToken',  'exception', 'Restangular', 'userInfoServiceApi'];

    /* @ngInject */
    function commonsDataService(authToken, exception, Restangular, userInfoServiceApi) {
      var service = {
        authorize   : authorize,
        checkEmail  : checkEmail,
        httpGETLIST : httpGETLIST,
        httpPOST    : httpPOST,
        httpPUT     : httpPUT
      };
      return service;

      function authorize() {
        var token = authToken.getToken();
        return userInfoServiceApi.one('userInfo')
          .get({token:token})
          .then(authorizeCallBack)
          .catch(function(message) {

          });

        function authorizeCallBack(response, status, header, config) {
          return Restangular.stripRestangular(response);
        }
      }

      function checkEmail(api, param) {
        return userInfoServiceApi.one(api)
          .get(param)
          .then(checkEmailCallBack)
          .catch(function(message) {
            /***
            ** Call the exception factory to show the error in the client for Development
            ** then wait for 5 seconds then redirect
            ***/
            exception.catcher('Error in checking email name on all the list of User Data',
              message);
          });

        function checkEmailCallBack(response, status, header, config) {
          return response;
        }
      }

      function httpGETLIST(api, param, apiService) {
        return apiService.all( api )
          .getList(param)
          .then( httpGETLISTCallback )
          .catch(function( message ){

          });

          function httpGETLISTCallback( response, status, header, config ) {
            return Restangular.stripRestangular(response);
          }
      }

      function httpPOST(api, param, apiService) {
        console.log(api, param);
        return apiService.all(api)
          .post(param)
          .then(httpPOSTCallback)
          .catch(function(message) {
            return message.data;
          });

        function httpPOSTCallback(response, status, header, config) {
          return Restangular.stripRestangular(response);
        }
      }

      function httpPUT(api, param, apiService) {
        return apiService.one(api)
          .put(param)
          .then(httpPUTCallBack)
          .catch(function(message){

          });

        function httpPUTCallBack(response, status, header, config) {
          return response;
        }
      }
    }
})();
