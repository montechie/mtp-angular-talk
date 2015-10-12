(function () {
    'use strict';

    /**
     * @ngdoc overview
     * @name ngSkeletonApp
     * @description
     * # ngSkeletonApp
     *
     * Main module of the application.
     */
    angular.module('Main', []);
    angular.module('Config', []);
    angular
        .module('mtpApp', [
            'ngAnimate',
            'ngAria',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'Main',
            'Config'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'scripts/main/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
