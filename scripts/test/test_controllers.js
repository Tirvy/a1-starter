(function() {
    angular.module('test.controllers', ['test.services', 'test.directives'])
        .controller('TestCtrl', ['$scope', '$rootScope', '$location', 'TestService',
            function ($scope, $rootScope, $location, testService) {
                // $scope.test = 'HI';
                //
                // $scope.arr = [];
                //
                // $scope.clickThis = function (val) {
                //     $scope.test = val;
                // };
                // testService.sayHello();
                // for (var i = 0; i < 100; i++) {
                //     $scope.arr.push(i);
                // }
                $scope.album_sort_type = 'title';

                testService.getPhotographers().then(function (res) {
                    $scope.photographersList = res.data;
                });

                $scope.album_list = false;
                $scope.showAlbums = function (elem) {
                    testService.getAlbums(elem).then(function (res){
                        $scope.album_list = true;
                        $scope.albumList = res.data;
                    });
                };

                $scope.modal_form = false;
                $scope.showPhotos = function (elem){
                    testService.getPhotos(elem).then(function (res) {
                        $scope.photoList = res.data;
                        $scope.modal_form = true;
                        $scope.photo_quantity_max = 10;
                    })
                };


                testService.getPosts().then(function (res) {
                    $scope.postsList = res.data;
                });

                $scope.getUserById = function(data,id){
                    console.log(data + "wowowo" + id);
                    return data.find(function (elem) {
                        return elem.id == id;
                    });
                }
            }])
})();