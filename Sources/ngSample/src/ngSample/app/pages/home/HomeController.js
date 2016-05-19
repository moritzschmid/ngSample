(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($scope) {
        $scope.name = 'waawawawawaw';
        $scope.stageinfos = [
            { 'id': 1, 'message': 'er wars' },
            { 'id': 2, 'message': 'sie wawawars' }
        ];
    }

})(); 