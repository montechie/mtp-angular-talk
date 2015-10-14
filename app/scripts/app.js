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
    angular.module('Gallery', []);
    angular.module('Config', []);
    angular.module('Components.ImageGallery', []);
    angular.module('Components', ['Components.ImageGallery']);
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
            'Gallery',
            'Config',
            'Components'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'scripts/main/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                .when('/gallery', {
                    templateUrl: 'scripts/loc-gallery/gallery.html',
                    controller: 'GalleryCtrl',
                    controllerAs: 'gallery'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
