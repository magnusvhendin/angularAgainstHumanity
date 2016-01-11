/*global Firebase:false */

(function () {
    'use strict';
    
     angular
    .module('services.general.nullcheck', [])
    .service('nullCheck', NullCheck);
    
        /** @ngInject */
    function NullCheck() {
        return function (value) {
            return !value;
        };
    }
})();