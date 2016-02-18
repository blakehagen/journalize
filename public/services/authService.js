angular.module('journalize').service('authService', function ($http, $q, BASE_URL) {

    this.getUser = function (userId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: BASE_URL + 'user/' + userId
        }).success(function (response) {
            deferred.resolve(response)
        }).error(function (err) {
            deferred.reject(err);
            console.log('error', err);
        })
        return deferred.promise
    }


});