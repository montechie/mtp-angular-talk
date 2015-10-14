(function () {
    'use strict';

    var LocService = function ($resource, $q) {
        var locApi = $resource('http://loc.gov/pictures/',
            {
                callback: "JSON_CALLBACK"
            },
            {
                query: {
                    method: "JSONP"
                }
            }
        );

        return {
            getFeaturedPhotos: function () {
                var promise = $q.defer(),
                    data = {
                        fo:'json',
                        at:'featured'
                    };

                locApi.query(data,
                    function (successResponse) {
                        return promise.resolve(successResponse.featured);
                    },
                    function (errorResponse) {
                        return promise.reject(errorResponse.msg);
                    }
                );

                return promise.promise;
            }
        };
    };
    angular.module('Gallery').factory('LocService', LocService);
})();
