(function() {
    'use strict';

    angular
    
        .module('app',['ngRoute']); 
         
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
(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);
        
        function HomeController($scope)
        {
            $scope.name = "waawawawawaw";
            
        }
         
})(); 

(function() {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController);
        
        function ListController($scope)
        {
            $scope.name = "List all items";
            
        }
         
})(); 