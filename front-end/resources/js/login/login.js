(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('Login', Login);

    /*Inject angular related directive*/
    Login.$inject = ['$q', '$rootScope', '$auth', '$timeout', 'strapAlert', 'strapModal', 'commonsDataService'];

    function Login($q, $rootScope, $auth, $timeout, strapAlert, strapModal, commonsDataService) {
      var vm = this;
      vm.isAuthenticated = $auth.isAuthenticated;
      vm.authenticate    = authenticate;
      vm.logInUser       = logInUser;
      vm.logOut          = logOut;
      vm.login           = login;
      vm.votersLogin     = votersLogin;
      getAuthorization();

      function getAuthorization() {
        return $q.all([getAuthorizationCallBack()])
        .then(function(response) {
          $rootScope.username = response[0].displayName;
          return response;
        });
      }

      function getAuthorizationCallBack() {
        return commonsDataService.authorize()
          .then(function(response) {
            return response;
          });
      }

      function logInUser() {
        strapModal.show('am-fade-and-scale', 'center', 'commons/login.html');
      }

      function logOut() {
        $auth.logout();
      }

      function login(isLoginFormValid) {
        if (!isLoginFormValid) {return;}

        $auth.login({
          email: vm.email,
          password: vm.password
        }).then(function(response) {
          $rootScope.username = response.data.user.username;
          strapModal.hide();
        }).catch(function(error) {
          strapAlert.show('Something, went wrong!', 'Wrong email/password', 'alert-logIn');
          $timeout(function() {
            strapAlert.hide();
          }, 2000);
        });
      }

      function loginCallBack() {
        return commonsDataService
          .login('userLogIn', {
            email: vm.email,
            password: vm.password
          })
          .then(function(response) {
            return response;
          });
      }

      function authenticate(provider) {
        $auth.authenticate(provider)
        .then(function(response) {
          $rootScope.username = response.data.user.displayName || response.data.user.username;
          vm.isAuthenticated = $auth.isAuthenticated;
        }, function(err) {
          if (err) {throw err;}
        });
      }

      function votersLogin() {
        $auth.login({
          votersId: vm.votersId,
        }).then(function(response) {
          console.log(response);
          // $rootScope.username = response.data.user.username;
          // strapModal.hide();
        }).catch(function(error) {
          strapAlert.show('Something, went wrong!! ', 'You are not yet Registered');
          $timeout(function() {
            strapAlert.hide();
          }, 3000);
        });
        // return $q.all([votersLoginCallback()])
        //   .then(function(response) {
        //     return response;
        //   });
      }

      function votersLoginCallback() {
        return commonsDataService
          .httpPOST('votersLogin', {
            votersId: vm.votersId
          }).then(function(response) {
            return response;
          });
      }
    }
}());
