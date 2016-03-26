/* global angular, document, window */
'use strict';

angular.module('kApp.LoginController', [])

.controller('LoginController', function($scope, $stateParams, $state, $ionicSideMenuDelegate, $timeout, ionicMaterialInk, ionicMaterialMotion, ServiceFactory, $http) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');
    closeMenus();

    // Delay expansion
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);

    $scope.login = function() {
        ServiceFactory.createAccountSMS('myFirstName','myLastName','myEmail','myPhone').then(
            function successCallback(response) {
                console.log("response=" + response);
                $state.go('app.page1'); //TODO: just for test
            }, 
            function errorCallback(response) {
                console.log("Login not successful");
            })
    }

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();

    function closeMenus() { //TODO: should be moved to a factory
        // If menu buttons are enabled, disable it
        if (document.getElementById('fab-menu-main').classList.contains('on')) {
            document.getElementById('fab-menu-main').classList.toggle('on');
        }
        if (document.getElementById('fab-menu-right').classList.contains('on')) {
            document.getElementById('fab-menu-right').classList.toggle('on');
            document.getElementById('fab-menu-middle').classList.toggle('on');
            document.getElementById('fab-menu-left').classList.toggle('on');
            document.getElementById('fab-menu-top').classList.toggle('on');
        }

        // If side menu is opened, close it
        if ($ionicSideMenuDelegate.isOpen()) {
            $ionicSideMenuDelegate.toggleLeft();
        }
    }

});