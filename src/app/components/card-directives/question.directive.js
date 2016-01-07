(function() {
  'use strict';

  angular
    .module('directives.card.question', [])
    .directive('question', QuestionDirective);

  /** @ngInject */
  function QuestionDirective($log) {
    return {
        scope: {
            question: '=ngModel'
        },
        replace: true,
        restrict: 'E',
        templateUrl: './app/components/card-directives/question.directive.html',
        link: function ($scope) {
          
        }
    }
  }
})();
