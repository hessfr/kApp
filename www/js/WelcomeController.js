/* global angular, document, window */
'use strict';

angular.module('kApp.WelcomeController', [])

.controller('WelcomeController', function($scope, $stateParams, $state, $ionicSideMenuDelegate, $timeout, ionicMaterialInk, ionicMaterialMotion, ServiceFactory, $http) {

    var activeSlide = 0;

    // Delay expansion
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);

    $scope.$parent.clearFabs(); 
    closeMenus();



    $scope.login = function() {
        ServiceFactory.createAccountSMS('myFirstName','myLastName','myEmail','myPhone').then(
            function successCallback(response) {
                $state.go('app.page1'); //TODO: just for test
            }, 
            function errorCallback(response) {
                console.log("Login not successful");
            })
    };

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();

    // Called to navigate to the main app
    var startAppWithoutLogin = function() {
        $state.go('app.page1');

        // Set a flag that we finished the tutorial
        window.localStorage['didTutorial'] = true;
    };

    // Comment this out if you wanna test the welcome screen:
    if(window.localStorage['didTutorial'] === "true") {
        console.log('Skip intro');
        startAppWithoutLogin();
    } else {
        setTimeout(function () {
            navigator.splashscreen.hide();
        }, 750);
    }

    var leftButton = document.getElementById('left-button');
    leftButton.innerHTML = 'SKIP';
    var rightButton = document.getElementById('right-button');
    rightButton.innerHTML = 'NEXT';

    $scope.leftButtonClicked = function() {
        if (activeSlide == 0) {
            startAppWithoutLogin();
        } else {
            prev();
        }
    };
    $scope.rightButtonClicked = function() {
        if (activeSlide == 2) { 
            startAppWithoutLogin();
        } else {
            next();
        }
    };

    // Move to the next slide
    var next = function() {
        $scope.$broadcast('slideBox.nextSlide');
    };

    // Move to the prev slide
    var prev = function() {
        $scope.$broadcast('slideBox.prevSlide');
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {

        activeSlide = index;

        // Check if we should update the left buttons
        if(index > 0) {
            leftButton.innerHTML = 'BACK';
        } else {
            leftButton.innerHTML = 'SKIP';
        }

        if(index == 2) {
            rightButton.innerHTML = 'START APP';
        } else {
            rightButton.innerHTML = 'NEXT';
        }
    };

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