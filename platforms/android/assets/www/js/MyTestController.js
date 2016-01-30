/* global angular, document, window */
'use strict';

angular.module('kApp.MyTestController', [])

// .controller('MyTestController', function($timeout) {

.controller('MyTestController', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {

    // Wait for animation to finish:
    $timeout(function () {
        // document.getElementById('fab-menu').classList.toggle('on');
        // document.getElementById('left-button').classList.toggle('on');
    }, 200);
    
    $scope.myfct = function() {
        console.log("--------");
    }
})
