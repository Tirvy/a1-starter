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
    }])

    .directive('modalWindow', function(){
        return {
            restrict: 'EA',
            link: function(scope, element) {
                $('.modal_form').draggable({
                    handle: '.modal_header'
                });
            }
        }
    });
   


})();