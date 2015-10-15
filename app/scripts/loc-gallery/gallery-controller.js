(function () {
    'use strict';

    /**
     * Look! No funky array of dependencies, yay ng-annotate!
     * @param LocService
     * @constructor
     */
    var GalleryCtrl = function (LocService) {
        var vm = this;
        angular.extend(vm, {
            photos: [],
            messaging: ''
        });

        var init = function () {
            // Let's hit our photos endpoint, get a promise, but not wait for it.  Fill up the photos
            // binding once they're ready.
            LocService.getFeaturedPhotos().then(
                function (photos) {
                    vm.photos = photos;
                },
                function (errorMsg) {
                    vm.messaging = errorMsg;
                }
            );
        };

        return(function () {
            init();
        }());
    };

    angular.module('Gallery').controller('GalleryCtrl', GalleryCtrl);
})();
