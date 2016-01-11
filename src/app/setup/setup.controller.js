(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .controller('SetupController', SetupController);
    

  /** @ngInject */
  function SetupController(deckService, gameService, $log, $scope) {
    var vm = this;
    
    activate();

    function activate() {
       vm.playerName = '';
       vm.joinId = '';
       vm.error = {
           idAlreadyExist: false,
           idDoesntExist: false
       };
    }

    vm.join = function () {
        if (vm.playerName.length < 1) return;
        if (vm.joinId.length < 1) return;
        
        $scope.$emit('show-overlay');
        
        gameService.checkIfIdExist(vm.joinId).then(function (idExist) {
            if (idExist) {
                // Join existing game
            } else {
                
            }
        });
    };
    vm.create = function () {
        if (vm.playerName.length < 1) return;
        if (vm.joinId.length < 1) return;
        
        $scope.$emit('show-overlay');

        var player = gameService.newPlayer(vm.playerName);
        
        gameService.newGame(player, vm.joinId).then(function (success, data) {
            console.log(success, data);
            if (success) {
                // Go to the game I guess
            } else {
                $scope.$emit('hide-overlay');
                if (data === 'id') {
                    
                }
            }
        });
    };
  }
})();
