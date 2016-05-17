(function() {
    'use strict';

    angular
        .module('app.bizdesk.dashboards')
        .controller('SalesFabController', SalesFabController  );

    /* @ngInject */
    function SalesFabController($rootScope) {
        var vm = this;
        vm.changeDate = changeDate;

        ////////////////

        function changeDate($event) {
            $rootScope.$broadcast('salesChangeDate', $event);
        }
    }
})();