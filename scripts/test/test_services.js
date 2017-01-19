(function() {
    angular.module('test.services', [])
        .service('TestService', ['$http','$q', function ($http, $q) {
            var self = this;
            self.sayHello = function () {
              console.log('Hello');
            };
            self.getPhotographers = function () {
                return $http.get('https://jsonplaceholder.typicode.com/users');
            };
        }])
})();