angular.module('journalize', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: './features/login/loginTmpl.html',
            controller: 'userCtrl as user',
        })

        .state('user', {
            url: '/user/:id',
            templateUrl: './features/user/userTmpl.html',
            controller: 'userCtrl as user',
        })

    $urlRouterProvider
        .otherwise('/');







});

