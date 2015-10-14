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
