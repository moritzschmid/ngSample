(function() {
    'use strict';

    angular
    
        .module('app',['ngRoute','ngMaterial']); 
         
})();  
//Define an angular module for our app
angular.module('app')
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'app/pages/home/home.html',
                    controller: 'HomeController'
                }).
                when('/list', {
                    templateUrl: 'app/pages/list/list.html',
                    controller: 'ListController'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }])
    .controller('AddOrderController', function ($scope) {

        $scope.message = 'This is Add new order screen';

    })
    .controller('ShowOrdersController', function ($scope) {

        $scope.message = 'This is Show orders screen';

    });
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

(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);

    function ListController($scope) {
        $scope.name = 'List all items';
    }
})(); 