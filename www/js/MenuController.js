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
    }, 200);
    $scope.mainMenuClicked = function() {
        if ($ionicSideMenuDelegate.isOpen()) {
            $scope.hideMenu();
        } else {
            $scope.showMenu();
        }
    };
    $scope.leftMenuClicked = function() {
        $state.go('app.page1');
        $scope.hideMenu();
    };
    $scope.middleMenuClicked = function() {
        $state.go('app.page2');
        $scope.hideMenu();
    };
    $scope.rightMenuClicked = function() {
        $state.go('app.page3');
        $scope.hideMenu();
    };

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();

    $scope.showMenu = function() {
        if (!$ionicSideMenuDelegate.isOpen()) {
            $ionicSideMenuDelegate.toggleLeft();
        }
        document.getElementById('fab-menu-left').classList.toggle('on', true);
        document.getElementById('fab-menu-middle').classList.toggle('on', true);
        document.getElementById('fab-menu-right').classList.toggle('on', true);
    };

    $scope.hideMenu = function() {
        if ($ionicSideMenuDelegate.isOpen()) {
            $ionicSideMenuDelegate.toggleLeft();
        }
        document.getElementById('fab-menu-left').classList.toggle('on', false);
        document.getElementById('fab-menu-middle').classList.toggle('on', false);
        document.getElementById('fab-menu-right').classList.toggle('on', false);
    };
})
