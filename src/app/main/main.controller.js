(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($location) {
    var vm = this;

    vm.warning = 'Angular Against Humanity is extremely rude, gross and politically incorrect. Consider yourself warned.';
    vm.copyright = 'Angular Against Humanity is based on the card game "Cards Against Humanity", all rights reserved.';
    
    vm.goToPlayground = function () {
        $location.path('/playground');
    };
    
    vm.startNewGame = function () {
        $location.path('/setup');
    };

    activate();

    function activate() {
      
    }
  }
})();
