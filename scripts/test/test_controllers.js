(function() {
    angular.module('test.controllers', ['test.services', 'test.directives'])
        .controller('TestCtrl', ['$scope', '$rootScope', '$location', 'TestService',
            function ($scope, $rootScope, $location, testService) {
                $scope.test = 'HI';

            }])
})();