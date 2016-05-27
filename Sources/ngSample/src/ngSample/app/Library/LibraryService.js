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
