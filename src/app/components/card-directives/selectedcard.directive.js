(function() {
  'use strict';

  angular
    .module('directives.card.selectedcard', [])
    .directive('selectedcard', QuestionDirective);

  /** @ngInject */
  function QuestionDirective($log) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: './app/components/card-directives/selectedcard.directive.html'
    }
  }
})();
