(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($location) {
    var vm = this;

    vm.warning = 'Angular Against Humanity is extremely rude, gross and politically incorrect. Consider yourself warned.';
    
    vm.goToPlayground = function () {
        $location.path('/playground');
    };

    activate();

    function activate() {
      
    }
  }
})();
