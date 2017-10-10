(function(global) {
    'use strict';  
    
    angular.module('app.configMenu')
    .controller('configMenuController', ['$scope', function($scope) {

      $scope.clickF = function () {
        var MDCSnackbar = global.mdc.snackbar.MDCSnackbar;
        var snackbar = new MDCSnackbar($scope.snackbar);
  
        var messageInput = $scope.message;
        var actionInput  = $scope.action;
    
        var show = function(sb) {
          var data =  {
            message: messageInput.value,
            timeout: 2750
          };
    
          if (actionInput.value) {
            data.actionText = actionInput.value;
            data.actionHandler = function() {
              console.log(data);
            }
          }
    
          sb.show(data);
        };
    
        document.getElementById('show-snackbar').addEventListener('click', function() {
          show(snackbar);
        });
      }
    }])
    .directive('configMenuDirective', function() {
      return {
        restrict: 'E',
        controller: 'configMenuController',
        templateUrl: "app/modules/configMenu/configMenu.tpl.html"
      };
    });
    
  })(this);