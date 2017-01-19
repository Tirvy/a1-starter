(function() {
angular.module('test.directives', [])


    .directive('myDir',[ function() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.on('click', function () {
                   elem.text('clicked!');
                });

            }
        };
    }]);
   


})();