(function () {
    'use strict';

    // Convention is to call all of these Services, but these can be Providers (base), Services, and Factories.
    // 9/10 use Factories unless you need it in a config, then you need a Provider.
    var LocService = function ($resource, $q) {
        // This is a little more complicated because of CORS and using JSONP, but this is using $resource,
        // a nice HTTP wrapper that includes $delete, $get, update, etc. promises for non-blocking goodness.
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
            /**
             * This returns a promise until it gets fulfilled or there's an error.
             * @returns {promise.promise|Function}
             */
            getFeaturedPhotos: function () {
                var promise = $q.defer(),
                    data = {
                        fo:'json',
                        at:'featured'
                    };

                // Better idea is to create a base service class at the start and throw these handlers in there.
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
