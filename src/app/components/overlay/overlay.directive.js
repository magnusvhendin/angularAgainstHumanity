(function() {
  'use strict';

  angular
    .module('directives.overlay', [])
    .directive('overlay', OverlayDirective);

  /** @ngInject */
  function OverlayDirective() {
    return {
        replace: true,
        restrict: 'E',
        template: '<span><div class="overlay"></div><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></span>'
    }
  }
})();
