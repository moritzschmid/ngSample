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