(function () {
    // ^ closing your work in scope helps prevent global leakage and nasty bugs.  However, using straight up Angular
    // providers will also do this.

    // v strict is your friend for maintenance, as well as a JS linting tool.
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
        // vm => ViewModel, sort of $scope but doesn't pull in parent scopes. Becomes part of the
        // controllerAs variable in the route.
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

        // Several ways to do privileged methods or similar.
        // $scope is common, but best practice is to define on, or extend vm
        // Of course you can also create class functions via prototype.
        vm.doSomething = function () {

        };

        // I've found this very useful, to run some setup code first.  A more Angular way to do this with
        // controllers is to use a resolve function on the controller for the route.
        return (function () {
            init();
        }());
    };

    // You can just do this with an anonymous function, and it will work just fine. Debuggers work a little better
    // with the above though, and if you start doing more complicated OO structures this is easier.
    // The below adds a MainCtrl controller on the Main module.
    angular.module('Main').controller('MainCtrl', MainCtrl);
})();
