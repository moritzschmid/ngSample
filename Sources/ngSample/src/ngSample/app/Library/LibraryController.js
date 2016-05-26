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
