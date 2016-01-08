(function() {
  'use strict';
  
    // Services module
    angular.module('services', [
        'services.deck',
        'services.game'
    ]);
    
    // Directives module
    angular.module('directives', [
        'directives.card.answer',
        'directives.card.question',
        'directives.card.selectedcard',
        'directives.overlay'
      ]);

    // Main module
    angular.module('angularAgainstHumanity', [
            'ngAnimate', 
            'ngCookies', 
            'ngTouch', 
            'ngRoute',
            'services', 
            'directives'
        ]);
})();
