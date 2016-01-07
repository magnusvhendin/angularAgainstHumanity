/* global moment:false, Firebase:false */
(function() {
  'use strict';

  angular
    .module('angularAgainstHumanity')
    .constant('moment', moment)
    .constant('Firebase', Firebase);
})();
