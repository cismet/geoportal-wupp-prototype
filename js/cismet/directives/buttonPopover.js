angular.module(
    'de.cismet.smartAdmin.directives'
    ).directive('buttonPopover',
    [
         '$popover',
        function ($popover) {
            'use strict';
            return {
                restrict: 'A',
                link: function (scope, elem, attrs) {
                    var popover = $popover(elem, {
                        scope: scope,
                        title: 'Punkt suchen',
                        template: 'templates/pointSearchPopoverTemplate.html',
                        contentTemplate: 'templates/pointSearchPopoverContentTemplate.html',
                        placement: 'bottom',
                        trigger: 'manual'
                    });

                    scope.togglePopover = function () {
                        popover.$promise.then(popover.toggle);
                    };

                    scope.hidePopover = function () {
                        popover.$promise.then(popover.hide);
                    };
                }
            };
        }
    ]);