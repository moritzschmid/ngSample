(function () {
    'use strict';

    angular
        .module('app')
        .directive('progressbar', progressbar);

    function progressbar() {
        var directive = {
            link: link,
            templateUrl: 'app/directives/progressbar/progressbar.html',
            scope: {
                stageinfos: '='
            }
        };
        return directive;

        function link() {
         
        }
    }
})();  