(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
