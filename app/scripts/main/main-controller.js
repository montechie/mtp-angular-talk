(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name ngMtpApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the ngMtpApp
     */
    var MainCtrl = function () {
        // Private helpers & vars
        var vm = this,
            things = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

        /**
         * A constructor if you will, do any setup for the controller here.
         */
        var init = function () {
            vm.awesomeThings = things;
        };

        return (function () {
            init();
        }());
    };
    angular.module('Main').controller('MainCtrl', MainCtrl);
})();
