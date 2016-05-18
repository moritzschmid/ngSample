
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    function ListController($scope) {
        $scope.name = 'List all items';
    }
})(); 