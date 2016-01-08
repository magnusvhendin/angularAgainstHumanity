(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .controller('GameController', GameController);
    

  /** @ngInject */
  function GameController(deckService, gameService, $scope, $log) {
    var vm = this;

    activate();

    function activate() {
       
    }
  }
})();
