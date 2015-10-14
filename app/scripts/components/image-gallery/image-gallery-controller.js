(function () {
    'use strict';

    var ImageGalleryCtrl = function () {
        var vm = this,
            container;

        ///////////////////////////////////
        // Another way to add privileged
        // functions on the controller scope
        ///////////////////////////////////
        /**
         * Even in directives, you should do any DOM work in the link function, not in your controller.
         */
        vm.setContainer = function (_container) {
            container = _container;
        };

        /**
         * Oh so great effect
         */
        vm.changeBkgd = function () {
            // AngularJs uses jQuery Lite, so only a handful of methods are available, but more than you'll
            // use for most apps with AngularJs.
            container.toggleClass('gallery-blue');
        };
    };
    angular.module('Components.ImageGallery').controller('ImageGalleryCtrl', ImageGalleryCtrl);
})();
