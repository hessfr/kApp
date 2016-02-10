/* global angular, document, window */
'use strict';

angular.module('kApp.MenuController', [])

.controller('MenuController', function($scope, $stateParams, $state, $ionicSideMenuDelegate, $timeout, ionicMaterialInk, ionicMaterialMotion) {

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
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.leftMenuClicked = function() {
        console.log("leftMenuClicked");
        $state.go('app.page1');
    };
    $scope.middleMenuClicked = function() {
        console.log("middleMenuClicked");
        $state.go('app.page2');
    };
    $scope.rightMenuClicked = function() {
        console.log("rightMenuClicked");
        $state.go('app.page3');
    };

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();

})
