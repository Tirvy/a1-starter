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

                $scope.getUserById = function(data,id){
                    return data.find(function (elem) {
                        return elem.id == id;
                    });
                };

                $scope.refreshPosts = function (res,status,headers) {
                    console.log(res + '\n' + status + '\n' + headers);
                    testService.getPosts().then(function (res) {
                        console.log(res.data);
                        $scope.postsList = res.data;
                    });
                };
                $scope.refreshPosts();

                function dedag() {
                    console.log('sonsole.gol');
                };
                
                $scope.makePost = function () {
                    var sendObj = {userId : 1, body : $scope.postText, title : "wololo it worked!"};
                    console.log(sendObj);
                    testService.postPost(sendObj).then($scope.refreshPosts,dedag);
                };

            }])
})();