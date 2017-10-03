(function () {
    'use strict'

    var ToastDirective = function () {
        var directive = {
            templateUrl: "app/modules/toast/toast.tpl.html"
        }

        return directive;
    };

    angular.module('app.toast')
    .directive('toastDirective', ToastDirective);
})();