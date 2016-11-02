(function() {


        angular.module('app', [
            'ngRoute',
            "ui.router",


            'test.controllers'

        ])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        }])
        .constant('ConfigService', {
        })
        .run(function($rootScope, $templateCache) {
        });
})();
