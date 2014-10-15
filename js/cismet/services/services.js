angular.module('de.cismet.smartAdmin.services',
    [
        'ngResource',
    ]
    ).service('ShortCutService',
    [
        'LayoutService',
        function () {
            'use strict';
            return {
                isVisble: false
            };
        }
    ]).service('LayoutService',
    function () {
        'use strict';
        return {
            bodyClasses: {
                'fixed-header': true,
                'fixed-ribbon': true,
                'fixed-navigation': true,
                'search-mobile': true,
                'mobile-view-activated': true,
                'minified': false,
                'collapsed': false
            }
        };
    }).service('MenuService',
    [
        function () {
            var activeMenuItem = {};
            'use strict';
            var serviceObj = {
                activeItem: activeMenuItem,
                menuItems: [],
                activePath: [],
                getPathToActiveItem: function () {
                    return serviceObj.activePath.slice(0).reverse();
                }
            };
            return serviceObj;
        }
    ]);

