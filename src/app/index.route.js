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
      .when('/setup', {
        templateUrl: 'app/setup/setup.html',
        controller: 'SetupController',
        controllerAs: 'setup'
      })
      .when('/game', {
        templateUrl: 'app/game/game.html',
        controller: 'GameController',
        controllerAs: 'game'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
