(function() {
    'use strict';

    angular
    
        .module('app',['ngRoute','ngMaterial','library'])
         .config(function($mdIconProvider){
          $mdIconProvider
          .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon('menu', './assets/svg/menu.svg', 24)
            .icon('avatar1', './assets/svg/avatar-1.svg', 24)
            .icon('book', './assets/svg/book.svg', 24);
      });
         
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
(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('library', [ 'ngMaterial' ]);


})();
(function(){

  angular
       .module('library')
       .controller('LibraryController', [
            'libraryService', '$mdSidenav', '$mdBottomSheet', '$scope', 
          LibraryController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LibraryController( libraryService, $mdSidenav,$scope) {
    var self = this;

    self.selected     = null;
    self.books        = [ ];
    self.selectBook   = selectBook;
    self.toggleList   = toggleBooksList;
    // self.makeContact  = makeContact;

    // Load all registered users

    libraryService
          .loadAllBooks()
          .success( function( data ) {
            
            self.books    = data;
            self.selected = self.books[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleBooksList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectBook ( book ) {
      self.selected = angular.isNumber(book) ? $scope.books[book] : book;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    // function makeContact(selectedBook) {

    //     $mdBottomSheet.show({
    //     //   controllerAs  : "vm",
    //     //   templateUrl   : './src/users/view/contactSheet.html',
    //     //   controller    : [ '$mdBottomSheet', ContactSheetController],
    //     //   parent        : angular.element(document.getElementById('content'))
    //     // }).then(function(clickedItem) {
    //     //   $log.debug( clickedItem.name + ' clicked!');
    //     });

        /**
         * User ContactSheet controller
         */
        // function ContactSheetController( $mdBottomSheet ) {
        //   this.user = selectedUser;
        //   this.items = [
        //     { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
        //     { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
        //     { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
        //     { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
        //   ];
        //   this.contactUser = function(action) {
        //     // The actually contact process has not been implemented...
        //     // so just hide the bottomSheet

        //     $mdBottomSheet.hide(action);
        //   };
        // }
    //}

  }

})();

(function () {
  'use strict';

  angular.module('library')
    .service('libraryService', ['$q', '$http', LibraryService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function LibraryService($q, $http) {



    // Promise-based API
    return {
      loadAllBooks: function () {
        // Simulate async nature of real remote calls
        return  $http.get('data/products.json');
      }
    };
  }

})();

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