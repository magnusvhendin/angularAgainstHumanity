(function() {
  'use strict';

  angular
    .module('directives.overlay', [])
    .directive('overlay', OverlayDirective);

  /** @ngInject */
  function OverlayDirective() {
    return {
        link: function ($scope) {
            $scope.show = false;
            
            $scope.$on('show-overlay', function () {
                $scope.show = true;
            });
            
            $scope.$on('hide-overlay', function () {
                $scope.show = false;
            });
        },
        replace: true,
        restrict: 'E',
        template: '<span ng-show="show"><div class="overlay"></div><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></span>'
    }
  }
})();
