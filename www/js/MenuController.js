/* global angular, document, window */
'use strict';

angular.module('kApp.MyTestController', [])

// .controller('MyTestController', function($timeout) {

.controller('MyTestController', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Wait for animation to finish:
    $timeout(function () {
        document.getElementById('fab-menu-main').classList.toggle('on');
        document.getElementById('fab-menu-left').classList.toggle('on');
        document.getElementById('fab-menu-middle').classList.toggle('on');
        document.getElementById('fab-menu-right').classList.toggle('on');
    }, 200);
    $scope.mainMenuClicked = function() {
        console.log("mainMenuClicked");
    };
    $scope.leftMenuClicked = function() {
        console.log("leftMenuClicked");
    };
    $scope.middleMenuClicked = function() {
        console.log("middleMenuClicked");
    };
    $scope.rightMenuClicked = function() {
        console.log("rightMenuClicked");
    };

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();

})
