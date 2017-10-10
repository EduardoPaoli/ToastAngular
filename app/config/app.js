(function () {
    'use strict'

    var myApp = angular.module('app', [
        'app.toast',
        'app.configMenu'
    ]);

    myApp.config(function () {
        
        window.onload = function() { document.body.className = ''; };
    });
})();