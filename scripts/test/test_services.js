(function() {
    angular.module('test.services', [])
        .service('TestService', ['$http','$q', function ($http, $q) {
            var self = this;
            // self.sayHello = function () {
            //   console.log('Hello');
            // };
            var baseUrl = 'https://jsonplaceholder.typicode.com/';
            var urlList = ['users', 'albums/?userId=', 'photos?albumId=', 'posts'];


            self.getList = function(data, id){
                var deString = baseUrl + urlList[data];
                if (id) deString = deString + id;
                console.log(deString);
                return $http.get(deString);
            };
            // self.getPhotographers = function () {
            //     return $http.get('https://jsonplaceholder.typicode.com/users');
            // };
            // self.getAlbums = function (photographer) {
            //     return $http.get('https://jsonplaceholder.typicode.com/albums/?userId=' + photographer.id);
            // };
            // self.getPhotos = function (album) {
            //     return $http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + album.id);
            // };
            // self.getPosts = function () {
            //     return $http.get('https://jsonplaceholder.typicode.com/posts');
            // };
            self.postPost = function (post) {
                return $http.post('https://jsonplaceholder.typicode.com/posts', post);
            };
        }])
})();