/* global angular, document, window */
'use strict';

angular.module('kApp.Page2Controller', [])

.controller('Page2Controller', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);

        // Enable menu if it is not enabled yet
        if (!document.getElementById('fab-menu-main').classList.contains('on')) {
            document.getElementById('fab-menu-main').classList.toggle('on');
        }
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();

})
