(function() {
angular.module('test.directives', [])


    .directive('myDir',[ function() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                console.log(elem);
                elem.on('click', function () {
                   elem.text('clicked!');
                });

            }
        };
    }])

    .directive('modalWindow', [function(){
        return {
            restrict: 'EA',
            link: function(scope, elem, attrs) {
                var moving,
                    startX,
                    startY,
                    mstartX,
                    mstartY,
                    __elem = elem.find('h1')[0];

                __elem.onmousedown = function (event) {
                    moving = true;
                    startX = elem.offset().left;
                    startY = elem.offset().top;
                    mstartX = event.clientX;
                    mstartY = event.clientY;
                };

                __elem.onmousemove = function (event) {
                    if (moving == true) {
                        var x,y;
                        x = event.clientX - mstartX + startX;
                        y = event.clientY - mstartY + startY;
                        elem.offset({top:y,left:x});
                    }
                };

                __elem.onmouseup = function (event) {
                    moving = false;
                };
            }
        }
    }]);
   


})();