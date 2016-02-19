var baseUrl = 'http://localhost:3030/api/v1/';

angular.module('journalize', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: './features/login/loginTmpl.html',
                controller: 'loginCtrl',
            })

            .state('user', {
                url: '/user/:id',
                templateUrl: './features/user/userTmpl.html',
                controller: 'userCtrl as user',
            })

        $urlRouterProvider
            .otherwise('/');


    })

    .constant("BASE_URL", baseUrl)

