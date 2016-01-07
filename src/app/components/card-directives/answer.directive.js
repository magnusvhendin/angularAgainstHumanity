(function() {
  'use strict';

  angular
    .module('directives.card.answer', [])
    .directive('answer', AnswerDirective);

  /** @ngInject */
  function AnswerDirective($log) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: './app/components/card-directives/answer.directive.html'
    }
  }
})();
