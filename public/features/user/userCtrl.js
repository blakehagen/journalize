angular.module('journalize').controller('userCtrl', function ($rootScope, $scope, authService, $stateParams) {

    var user = this;

    // GET AUTHED USER DATA //
    user.getUserData = function () {
        authService.getUser($stateParams.id).then(function (authenticatedUser) {
            console.log(authenticatedUser);
            $rootScope.authenticatedUser = authenticatedUser;
            user.user = authenticatedUser;
        })
    }();









});