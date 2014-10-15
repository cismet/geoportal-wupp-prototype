//angular.module('de.cismet.smartAdmin.services', []);
//angular.module('de.cismet.smartAdmin.directives',[]);
//angular.module('de.cismet.smartAdmin.controllers',[]);

angular.module('de.cismet.smartAdmin', [
    'ngRoute',
    'ngAnimate',
    'de.cismet.smartAdmin.services',
    'de.cismet.smartAdmin.controllers',
    'de.cismet.smartAdmin.directives',
    'leaflet-directive'
]).config(function ($routeProvider) {
    $routeProvider.when('/geoportal',{
        templateUrl:'partials/dashboard.html',
        controller: 'DashBoardCtrl'
            
    }).otherwise({
       redirectTo:'/geoportal' 
    });
//    $locationProvider.html5Mode(true);
//    $locationProvider.hashPrefix('!');
});
