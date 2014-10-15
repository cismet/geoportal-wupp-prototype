angular.module(
    'de.cismet.smartAdmin.controllers',
    [
        'de.cismet.smartAdmin.services',
    ]
).controller('AppCtrl',
    [
        '$scope',
        'LayoutService',
        'MenuService',
        'ShortCutService',
        function ($scope, LayoutService, MenuService, ShortCutService) {
            'use strict';
            
            $scope.LayoutService = LayoutService;
            $scope.MenuService = MenuService;
            $scope.MenuService.menuItems = [{
                    name: 'Statseite',
                    icon: 'fa-bar-chart-o',
                    link: '/geoportal',
                }, {
                    name: 'Katalog',
                    icon: 'fa-sitemap',
                    link: '/worldstateTreeWidget'
                }
            ];

            $scope.showShortCut = function () {
                ShortCutService.isVisible = true;
            };


            //FIXME: Need to be removed
            // Note: You will also need to change this variable in the "variable.less" file.
            $.navbar_height = 49;

            /*
             * APP DOM REFERENCES
             * Description: Obj DOM reference, please try to avoid changing these
             */

            $.enableJarvisWidgets = true;

            // Warning: Enabling mobile widgets could potentially crash your webApp if you have too many 
            // 			widgets running at once (must have $.enableJarvisWidgets = true)
            $.enableMobileWidgets = false;

        }
    ]);
