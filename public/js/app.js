angular.module('journalize', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: './templates/mainTmpl.html',
            controller: 'loginCtrl',
        })

        .state('', {
            url: '/user/:id',
            templateUrl: './features/user/userTmpl.html',
            controller: 'userCtrl',
        })

    $urlRouterProvider
        .otherwise('/login');







});

