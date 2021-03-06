(function() {
    'use strict';

    angular
        .module('app.examples.elements')
        .controller('TablesAdvancedController', Controller);

    /* @ngInject */
    function Controller($scope, $timeout, $q, GithubService) {
        var vm = this;
        vm.query = {
            filter: '',
            limit: '10',
            order: '-id',
            page: 1
        };
        vm.selected = [];
        vm.columns = {
            avatar: 'TABLE.COLUMNS.AVATAR',
            login: 'TABLE.COLUMNS.LOGIN',
            id: 'TABLE.COLUMNS.ID'
        };
        vm.filter = {
            options: {
                debounce: 500
            }
        };
        vm.getUsers = getUsers;
        vm.removeFilter = removeFilter;

        activate();

        ////////////////

        function activate() {
            var bookmark;
            $scope.$watch('vm.query.filter', function (newValue, oldValue) {
                if(!oldValue) {
                    bookmark = vm.query.page;
                }

                if(newValue !== oldValue) {
                    vm.query.page = 1;
                }

                if(!newValue) {
                    vm.query.page = bookmark;
                }

                vm.getUsers();
            });
        }

        function getUsers() {
            vm.promise = GithubService.getUsers(vm.query);
            vm.promise.then(function(users){
                vm.users = users.data;
            });
        }

        function removeFilter() {
            vm.filter.show = false;
            vm.query.filter = '';

            if(vm.filter.form.$dirty) {
                vm.filter.form.$setPristine();
            }
        }
    }
})();