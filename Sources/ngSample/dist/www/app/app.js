(function() {
    'use strict';

    angular
    
        .module('app',['ngRoute','ngMaterial','library'])
         .config(function($mdIconProvider){
          $mdIconProvider
          .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon('menu', './assets/svg/menu.svg', 24)
            .icon('avatar1', './assets/svg/avatar-1.svg', 24);
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
          .then( function( books ) {
            self.books    = [].concat(books);
            self.selected = books[0];
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

(function(){
  'use strict';

  angular.module('library')
         .service('libraryService', ['$q', LibraryService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function LibraryService($q){
    var books = [
      {
        name: 'Lia Lugo',
        avatar: 'svg-1',
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi'+
                 ' cauliflower cheese cottage cheese swiss boursin fondue caerphilly.'+
                 ' Cow port-salut camembert de normandie macaroni cheese feta who moved my'+
                 ' cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg'+
                 ' blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
        name: 'George Duke',
        avatar: 'svg-2',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.'+
                 ' De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? '+
                 'De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        name: 'Gener Delosreyes',
        avatar: 'svg-3',
        content: 'Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled '+
                 'locavore bitters McSweeneys blog. '+
                 'Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt '+
                 'pop-up Thundercats chillwave vinyl '+
                 'jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. '+
                 'Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level '+
                 'sriracha typewriter Intelligentsia,'+
                 ' migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk '+
                 'fanny pack literally hoodie'+
                 ' bespoke, put a bird on it Marfa messenger bag kogi VHS.'
      },
      {
        name: 'Lawrence Ray',
        avatar: 'svg-4',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent '+
                 'linoleum so eat a plant, kill a hand pelt around the house and up and '+
                 'down stairs chasing phantoms run in circles, or claw drapes. '+
                 'Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        name: 'Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin '+
                 'stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, '+
                 'reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'Gani Ferrer',
        avatar: 'svg-6',
        content: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn'+
                 ' in your library card? Get a new drivers license? Stop being awesome? Dolor sit amet, '+
                 'consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. '+
                 'You dont go out and make a living dressed like that in the middle of a weekday. '+
                 'Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada.'
      }
    ];

    // Promise-based API
    return {
      loadAllBooks : function() {
        // Simulate async nature of real remote calls
        var b = books.concat(books);
        return $q.when(b);
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