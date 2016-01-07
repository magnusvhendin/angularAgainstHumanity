(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/playground', {
        templateUrl: 'app/playground/playground.html',
        controller: 'PlaygroundController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
