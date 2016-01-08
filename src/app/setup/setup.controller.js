(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .controller('SetupController', SetupController);
    

  /** @ngInject */
  function SetupController(deckService, gameService, $scope, $log) {
    var vm = this;
    
    activate();

    function activate() {
       vm.playerName = '';
       vm.joinId = ''; 
    }
    
    vm.startNewGame = function () {
        
    };
    
    vm.joinExistingGame = function () {
        
    };
  }
})();
