define(['./module'], function (directives) {
    'use strict';
    directives.directive('appVersion', function () {
        return function (scope, elm) {
            elm.text("2.5");
        };
    });
});
