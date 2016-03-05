angular.module('kApp', ['ionic', 'ionic-material', 'kApp.AppCtrl', 'kApp.Page1Controller', 'kApp.Page2Controller','kApp.Page3Controller','kApp.Page4Controller','kApp.MenuController', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    
    // Turn off back button text like this:
    $ionicConfigProvider.backButton.previousTitleText(false);
    

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.page1', {
        url: '/page1',
        views: {
            'pageContent': {
                templateUrl: 'templates/page1.html',
                controller: 'Page1Controller'
            }
        }
    })

    .state('app.page2', {
        url: '/page2',
        views: {
            'pageContent': {
                templateUrl: 'templates/page2.html',
                controller: 'Page2Controller'
            }
        }
    })

    .state('app.page3', {
        url: '/page3',
        views: {
            'pageContent': {
                templateUrl: 'templates/page3.html',
                controller: 'Page3Controller'
            }
        }
    })

    .state('app.page4', {
        url: '/page4',
        views: {
            'pageContent': {
                templateUrl: 'templates/page4.html',
                controller: 'Page4Controller'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/page1');
});
