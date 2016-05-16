(function () {
    'use strict';

    angular

        .module('app')
        .directive('appHeader', appHeader);

    function appHeader( ) {

        return {
            templateUrl: 'app/directives/header/header.html'
        };
    }
})();  