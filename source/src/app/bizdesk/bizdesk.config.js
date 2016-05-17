(function() {
    'use strict';

    angular
        .module('bizdesk')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/bizdesk');

        $stateProvider
        .state('triangular.admin-default.home-page', {
            url: '/bizdesk/home',
            templateUrl: 'app/bizdesk/home-page.tmpl.html',
            // set the controller to load for this page
            controller: 'HomePageController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
             // give the menu a name to show (should be translatable and in the il8n folder json)
            name: 'MENU.BIZDESK.HOME-PAGE',
            // point this menu to the state we created in the $stateProvider above
            state: 'triangular.admin-default.home-page',
            // set the menu type to a link
            type: 'link',
            // set an icon for this menu
            icon: 'zmdi zmdi-home',
            // set a proirity for this menu item, menu is sorted by priority
            priority: 1.1
        });
    }
})();