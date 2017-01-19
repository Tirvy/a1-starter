(function() {
    angular.module('test.controllers', ['test.services', 'test.directives'])
        .controller('TestCtrl', ['$scope', '$rootScope', '$location', 'TestService',
            function ($scope, $rootScope, $location, testService) {
                $scope.test = 'HI';

                $scope.arr = [];

                $scope.clickThis = function (val) {
                    $scope.test = val;
                };
                testService.sayHello();
                for (var i = 0; i < 100; i++) {
                    $scope.arr.push(i);
                }
                testService.getPhotographers().then(function (res) {
                    console.log(res);
                })
            }])
})();