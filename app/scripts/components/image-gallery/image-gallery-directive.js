(function () {
    'use strict';
    var ImageGalleryDirective = function () {
        // Use as Attribute or Element
        // Isolate scope and add an attribute, but use whatever internal var name.
        // Add a controller for complex logic, but save DOM manipulation for the link function.
        return {
            restrict: 'AE',
            scope: {
                allPhotos: '=photos'
            },
            controller: 'ImageGalleryCtrl',
            templateUrl: 'scripts/components/image-gallery/image-gallery.html',
            link: function ($scope, element, attrs, ctrl) {
                ctrl.setContainer($('.gallery-container', element));

                // element is wrapped in jqLite $()
                element.on('mouseover', ctrl.changeBkgd);
            }
        };
    };
    // Must start with lower case, ng automagically hyphenates the directive name in the DOM
    angular.module('Components.ImageGallery').directive('imageGallery', ImageGalleryDirective);
})();
