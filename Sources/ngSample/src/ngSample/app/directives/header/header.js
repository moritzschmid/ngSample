(function () {
    'use strict';

    angular
        .module('app')
        .directive('appHeader', appHeader);

    function appHeader() {
        var directive = {
            link: link,
            templateUrl: 'app/directives/header/header.html'
        };
        return directive;

        function link() {
            var aa = 'bb';
            var bb = 'cc';
            if (bb === aa) {
                console.log('');
            }
        }
    }
})();  