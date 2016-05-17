(function() {
    'use strict';

    angular
        .module('seed-module')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/seed-module');

        $stateProvider
        .state('triangular.admin-default.seed-page', {
            url: '/seed-module/seed-page',
            templateUrl: 'app/seed-module/seed-page.tmpl.html',
            // set the controller to load for this page
            controller: 'SeedPageController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
             // give the menu a name to show (should be translatable and in the il8n folder json)
            name: 'MENU.SEED.SEED-MODULE',
            // point this menu to the state we created in the $stateProvider above
            state: 'triangular.admin-default.seed-page',
            // set the menu type to a link
            type: 'link',
            // set an icon for this menu
            icon: 'zmdi zmdi-home',
            // set a proirity for this menu item, menu is sorted by priority
            priority: 1.1
        });
    }
})();