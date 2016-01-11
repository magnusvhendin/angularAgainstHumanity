/* global angular */
/* global moment */
/* global FireBase */
(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .run(runBlock);
    

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
