(function() {
    'use strict';

    angular
        .module('bizdesk', [
            'app.bizdesk.calendar',
            'app.bizdesk.todo',
            'app.bizdesk.email',
            'app.bizdesk.dashboards'
        ]);
})();