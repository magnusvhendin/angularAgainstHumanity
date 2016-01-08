(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .controller('SetupController', SetupController);
    

  /** @ngInject */
  function SetupController(deckService, gameService, $log) {
    var vm = this;
    
    activate();

    function activate() {
       vm.playerName = '';
       vm.joinId = ''; 
    }
    
    vm.join = function () {
        if (vm.playerName.length < 1) return;
        if (vm.joinId.length < 1) return;
        
              
    };
    vm.create = function () {
        if (vm.playerName.length < 1) return;
        if (vm.joinId.length < 1) return;
        
        var player = gameService.newPlayer(vm.playerName);
        gameService.newGame(player, vm.joinId).then(function (game) {
            $log.debug(player, game);    
        });
    };
  }
})();
